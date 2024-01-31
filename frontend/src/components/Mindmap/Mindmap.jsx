import React, { useState, useCallback, useLayoutEffect} from 'react';
import ELK from 'elkjs/lib/elk.bundled.js';
import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
  } from 'reactflow';
import NodePopup from 'src/components/NodePopup/NodePopup';

import 'reactflow/dist/style.css';
import 'src/components/Mindmap/Mindmap.css';

const elk = new ELK();
const elkOptions = {
    'elk.algorithm': 'radial',
    'elk.layered.spacing.nodeNodeBetweenLayers': '100',
    'elk.spacing.nodeNode': '80',
    };

const getLayoutedElements = (nodes, edges, options = {}) => {
    const isHorizontal = options?.['elk.direction'] === 'RIGHT';
    const graph = {
        id: 'root',
        layoutOptions: options,
        children: nodes.map((node) => ({
        ...node,
        // Adjust the target and source handle positions based on the layout
        // direction.
        targetPosition: isHorizontal ? 'left' : 'top',
        sourcePosition: isHorizontal ? 'right' : 'bottom',
    
        // Hardcode a width and height for elk to use when layouting.
        width: 150,
        height: 50,
        })),
        edges: edges,
    };
    
    return elk
        .layout(graph)
        .then((layoutedGraph) => ({
        nodes: layoutedGraph.children.map((node) => ({
            ...node,
            // React Flow expects a position property on the node instead of `x`
            // and `y` fields.
            position: { x: node.x, y: node.y },
        })),
    
        edges: layoutedGraph.edges,
        }))
        .catch(console.error);
    };

function Mindmap({nodes, edges, setNodes, setEdges, infoDict}) {
    const [popup, setPopup] = useState(false);
    const [nodeID, setNodeID] = useState("");
    const [quotes, setQuotes] = useState([]);
    const [summary, setSummary] = useState("");

    const [captureElementClick, setCaptureElementClick] = useState(true);
    async function handleNodeClick (e, node) {
        e.preventDefault();
        if (popup === false) {
            console.log('click node', node);
            await changeNode(node.id);
            await load(node.id);
        }
        setPopup(!popup);
        var divInfo = document.getElementById('node-wrapper');
        divInfo.scrollTop = 0;
    };

    async function changeNode(nodeID) {
        return new Promise((resolve)=>{
            setNodeID(nodeID);
            resolve();
        });
    }
    async function load(nodeID) {
        return new Promise((resolve)=> {
            setQuotes(infoDict[nodeID][1]);
            setSummary(infoDict[nodeID][0]);
            resolve();
        });
    }

    const handlePopupExit = (e) => {
        e.preventDefault();
        if (popup === true) {
            setPopup(!popup);
        }
    }

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    const onLayout = useCallback(
        ({ direction }) => {
          const opts = { 'elk.direction': direction, ...elkOptions };
          const ns = nodes;
          const es = edges;
    
          getLayoutedElements(ns, es, opts).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
    
            // window.requestAnimationFrame(() => fitView());
          });
        },
        [nodes, edges]
      );
    
    // Calculate the initial layout on mount.
    if (nodes != []) {
        useLayoutEffect(() => {
            onLayout({ direction: 'DOWN' });
        }, []);
    }

    return (
        <div style={{position: 'relative', display:'flex'}}>
            <div id='node-wrapper' style={{right: popup ? '0' : '-100%'}}>
                <NodePopup popup={popup} setPopup={setPopup} nodeID={nodeID} quotes={quotes} summary={summary}/>
            </div>
            <div id='mindmap-wrapper' style={{opacity: popup ? '.4' : '1'}}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onNodeClick={captureElementClick ? handleNodeClick : undefined}
                    onClick={handlePopupExit}
                    fitView={true}
                >
                    <Controls />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>;
            </div>
        </div>
    );
}

export default Mindmap;