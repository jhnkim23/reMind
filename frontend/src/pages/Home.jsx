import React, { useState } from 'react';
import Button from "src/components/Button/Button";
import Mindmap from "src/components/Mindmap/Mindmap";

function Home() {
    let t_file, a_file;
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    function handleClick(e) {
      console.log(e.target.id)
      setNodes([{
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
      },
      {
        id: '2',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
      },]);
      setEdges([{ id: '1-2', source: '1', target: '2'},]);
    }

    const addAudio = (e) => {
        const a=URL.createObjectURL(e.target.files[0])
        a_file = a;
    }

    const addTranscript = (e) => {
        const t=URL.createObjectURL(e.target.files[0])
        t_file = t;
    }

    return (
      <>
        <div id="header">
          <h1>reMind.ai</h1>

          <div id="submitWrapper">
            <div id="transcript">
                <input id="t_input" type='file' onChange={addAudio} />
                <Button id="t" name="transcript file" onClick={handleClick}/>
            </div>

            <div id="audio">
                <input id="a_input" type='file' onChange={addTranscript} />
                <Button id="a" name="audio file" onClick={handleClick}/>
            </div>
          </div>
        </div>

        <div id="mindmap">
          <Mindmap nodes={nodes} edges={edges} setNodes={setNodes} setEdges={setEdges}/>
        </div>
      </>
    );
  }
export default Home;