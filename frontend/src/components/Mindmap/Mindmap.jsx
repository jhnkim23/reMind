import React, { useState, useCallback, useEffect} from 'react';
import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
  } from 'reactflow';
import NodePopup from 'src/components/NodePopup/NodePopup';

import 'reactflow/dist/style.css';
import 'src/components/Mindmap/Mindmap.css';

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