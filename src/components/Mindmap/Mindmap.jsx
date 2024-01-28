import React, { useState, useCallback } from 'react';
import ReactFlow, {
    Controls,
    Background,
    MiniMap,
    applyNodeChanges,
    applyEdgeChanges,
  } from 'reactflow';
import NodePopup from 'src/components/NodePopup/NodePopup';

import 'reactflow/dist/style.css';
import 'src/components/Mindmap/Mindmap.css';

function Mindmap({nodes, edges, setNodes, setEdges}) {
    const [popup, setPopup] = useState(false);

    const onNodeClick = (event, node) => {
        console.log('click node', node);
        setPopup(!popup);
    };

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    const [captureElementClick, setCaptureElementClick] = useState(true);

    return (
        <div style={{position: 'relative'}}>
            <div id='node-wrapper' style={{right: popup ? '0' : '-100%'}}>
                <NodePopup popup={popup} setPopup={setPopup}/>
            </div>
            <div id='mindmap-wrapper' style={{opacity: popup ? '.5' : '1'}}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onNodeClick={captureElementClick ? onNodeClick : undefined}
                    fitView
                >
                    <Controls />
                    <MiniMap />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
            </div>
        </div>
    );
}

export default Mindmap;