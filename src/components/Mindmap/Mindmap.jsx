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

const onNodeClick = (event, node) => console.log('click node', node);

function Mindmap({nodes, edges, setNodes, setEdges}) {
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
        <div style={{ width: '100vw', height: '100vh' }}>
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
    );
}

export default Mindmap;