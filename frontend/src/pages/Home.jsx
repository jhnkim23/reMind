import React, { useState, useCallback} from 'react';
import Button from "src/components/Button/Button";
import Mindmap from "src/components/Mindmap/Mindmap";
import 'src/pages/Home.css';

import ELK from 'elkjs/lib/elk.bundled.js';

const elk = new ELK();
const elkOptions = {
    'elk.algorithm': 'org.eclipse.elk.radial',
    'elk.layered.spacing.nodeNodeBetweenLayers': '80',
    'elk.spacing.nodeNode': '100',
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

function Home() {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [infoDict, setInfoDict] = useState({});
    const [responseData, setResponseData] = useState('');
    const [audioFile, setAudioFile] = useState(null);
    const [transcriptFile, setTranscriptFile] = useState(null);
    
    async function uploadFile(file, type) {
      const formData = new FormData();
      formData.append(type, file);

      try {
        const response = await axios.post('', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
          console.log(response.data);
          // Handle your response here
      } catch (error) {
          console.error(error);
          // Handle error here
      }
    }

    const onLayout = useCallback(
      ({ direction, nodesToSet, edgesToSet }) => {
          const opts = { 'elk.direction': direction, ...elkOptions };
          const ns = nodesToSet;
          const es = edgesToSet;
          
          getLayoutedElements(ns, es, opts).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
          setNodes(layoutedNodes);
          setEdges(layoutedEdges);
  
          //window.requestAnimationFrame(() => fitView());
          });
      },
      [nodes, edges]
      );

    async function handleClick(e) {
      e.preventDefault();
      // const response = await axios.post('http://127.0.0.1:8000/process_text/', { data: t_file });
      // setResponseData(response.data);
      // console.log(response.data)
      // console.log(e.target.id)
      
      /*
      if (e.target.id === 't') {
        if (transcriptFile) {
            await uploadFile(transcriptFile, "text file");
        } else {
            console.log("No transcript file selected");
        }
      } else if (e.target.id === 'a') {
          if (audioFile) {
              await uploadFile(audioFile, "audio file");
          } else {
              console.log("No audio file selected");
          }
      }
      */
     
      let nodesToSet = [{'id': 'The Future of AI and OpenAI', 'type': 'input', 'data': {'label': 'The Future of AI and OpenAI'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Applications of ChatGPT', 'data': {'label': 'Applications of ChatGPT'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Reactions to the Launch', 'data': {'label': 'Reactions to the Launch'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Factors Differentiating ChatGPT', 'data': {'label': 'Factors Differentiating ChatGPT'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Integration into Daily Life', 'data': {'label': 'Integration into Daily Life'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Expanding Interface', 'data': {'label': 'Expanding Interface'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Risks and Benefits of AI', 'data': {'label': 'Risks and Benefits of AI'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Concerns about Identity Verification', 'data': {'label': 'Concerns about Identity Verification'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Solutions for Identity Verification', 'data': {'label': 'Solutions for Identity Verification'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Impact on Social Media', 'data': {'label': 'Impact on Social Media'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Managing AI Risks', 'data': {'label': 'Managing AI Risks'}, 'position': {'x': 0, 'y': 0}}, {'id': "OpenAI's Mission and Structure", 'data': {'label': "OpenAI's Mission and Structure"}, 'position': {'x': 0, 'y': 0}}, {'id': 'Government Regulation of AI', 'data': {'label': 'Government Regulation of AI'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Global Oversight', 'data': {'label': 'Global Oversight'}, 'position': {'x': 0, 'y': 0}}, {'id': "OpenAI's Responsibility", 'data': {'label': "OpenAI's Responsibility"}, 'position': {'x': 0, 'y': 0}}, {'id': 'Future Challenges and Outlook', 'data': {'label': 'Future Challenges and Outlook'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Short-Term and Long-Term Regulation', 'data': {'label': 'Short-Term and Long-Term Regulation'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Comprehensive Regulation', 'data': {'label': 'Comprehensive Regulation'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Wealth Redistribution', 'data': {'label': 'Wealth Redistribution'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Balancing Progress and Caution', 'data': {'label': 'Balancing Progress and Caution'}, 'position': {'x': 0, 'y': 0}}, {'id': 'AI Development and Policy', 'data': {'label': 'AI Development and Policy'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Evaluating Progress', 'data': {'label': 'Evaluating Progress'}, 'position': {'x': 0, 'y': 0}}, {'id': "OpenAI's Approach", 'data': {'label': "OpenAI's Approach"}, 'position': {'x': 0, 'y': 0}}];
      let edgesToSet = [{'id': 'The Future of AI and OpenAI-Applications of ChatGPT', 'source': 'The Future of AI and OpenAI', 'target': 'Applications of ChatGPT', 'type': 'straight'}, {'id': 'The Future of AI and OpenAI-Reactions to the Launch', 'source': 'The Future of AI and OpenAI', 'target': 'Reactions to the Launch', 'type': 'straight'}, {'id': 'Reactions to the Launch-Factors Differentiating ChatGPT', 'source': 'Reactions to the Launch', 'target': 'Factors Differentiating ChatGPT', 'type': 'straight'}, {'id': 'The Future of AI and OpenAI-Integration into Daily Life', 'source': 'The Future of AI and OpenAI', 'target': 'Integration into Daily Life', 'type': 'straight'}, {'id': 'Integration into Daily Life-Expanding Interface', 'source': 'Integration into Daily Life', 'target': 'Expanding Interface', 'type': 'straight'}, {'id': 'The Future of AI and OpenAI-Risks and Benefits of AI', 'source': 'The Future of AI and OpenAI', 'target': 'Risks and Benefits of AI', 'type': 'straight'}, {'id': 'Risks and Benefits of AI-Concerns about Identity Verification', 'source': 'Risks and Benefits of AI', 'target': 'Concerns about Identity Verification', 'type': 'straight'}, {'id': 'Concerns about Identity Verification-Solutions for Identity Verification', 'source': 'Concerns about Identity Verification', 'target': 'Solutions for Identity Verification', 'type': 'straight'}, {'id': 'Risks and Benefits of AI-Impact on Social Media', 'source': 'Risks and Benefits of AI', 'target': 'Impact on Social Media', 'type': 'straight'}, {'id': 'Risks and Benefits of AI-Managing AI Risks', 'source': 'Risks and Benefits of AI', 'target': 'Managing AI Risks', 'type': 'straight'}, {'id': "The Future of AI and OpenAI-OpenAI's Mission and Structure", 'source': 'The Future of AI and OpenAI', 'target': "OpenAI's Mission and Structure", 'type': 'straight'}, {'id': "OpenAI's Mission and Structure-Government Regulation of AI", 'source': "OpenAI's Mission and Structure", 'target': 'Government Regulation of AI', 'type': 'straight'}, {'id': 'Government Regulation of AI-Global Oversight', 'source': 'Government Regulation of AI', 'target': 'Global Oversight', 'type': 'straight'}, {'id': "OpenAI's Mission and Structure-OpenAI's Responsibility", 'source': "OpenAI's Mission and Structure", 'target': "OpenAI's Responsibility", 'type': 'straight'}, {'id': 'The Future of AI and OpenAI-Future Challenges and Outlook', 'source': 'The Future of AI and OpenAI', 'target': 'Future Challenges and Outlook', 'type': 'straight'}, {'id': 'Future Challenges and Outlook-Short-Term and Long-Term Regulation', 'source': 'Future Challenges and Outlook', 'target': 'Short-Term and Long-Term Regulation', 'type': 'straight'}, {'id': 'Short-Term and Long-Term Regulation-Comprehensive Regulation', 'source': 'Short-Term and Long-Term Regulation', 'target': 'Comprehensive Regulation', 'type': 'straight'}, {'id': 'Future Challenges and Outlook-Wealth Redistribution', 'source': 'Future Challenges and Outlook', 'target': 'Wealth Redistribution', 'type': 'straight'}, {'id': 'Future Challenges and Outlook-Balancing Progress and Caution', 'source': 'Future Challenges and Outlook', 'target': 'Balancing Progress and Caution', 'type': 'straight'}, {'id': 'The Future of AI and OpenAI-AI Development and Policy', 'source': 'The Future of AI and OpenAI', 'target': 'AI Development and Policy', 'type': 'straight'}, {'id': 'AI Development and Policy-Evaluating Progress', 'source': 'AI Development and Policy', 'target': 'Evaluating Progress', 'type': 'straight'}, {'id': "AI Development and Policy-OpenAI's Approach", 'source': 'AI Development and Policy', 'target': "OpenAI's Approach", 'type': 'straight'}]
      onLayout({ direction: 'DOWN', nodesToSet, edgesToSet});
    }
    
    const addAudio = (e) => {
      e.preventDefault();
      setAudioFile(e.target.files[0]);
    }

    const addTranscript = (e) => {
      e.preventDefault();
      setTranscriptFile(e.target.files[0]);
    }

    return (
      <>
        <div id='box'>
          <div id="header">
            <h1>reMind.ai</h1>

            <div id="submitWrapper">
              <div id="transcript">
                  <input id="t_input" type='file' onChange={addTranscript} />
                  <Button id="t" name="transcript file" onClick={handleClick}/>
              </div>

              <div id="audio">
                  <input id="a_input" type='file' onChange={addAudio} />
                  <Button id="a" name="audio file" onClick={handleClick}/>
              </div>
            </div>
          </div>

          <div id="mindmap">
            <Mindmap nodes={nodes} edges={edges} setNodes={setNodes} setEdges={setEdges} infoDict={infoDict}/>
          </div>
        </div>
      </>
    );
  }
export default Home;