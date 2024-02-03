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
      setInfoDict({'Applications of ChatGPT': ['ChatGPT is used for summarization, translation, and drafting tweets.', ['One thing I use it for every day is help with summarization.', 'I used it to translate an article for someone I’m meeting next week.', 'I used it to help me draft a tweet that I was having a hard time with.']], 'Reactions to the Launch': ["The launch excited people, but some wondered why it hadn't happened before.", ['We thought it was going to excite people, but the people we spend a lot of time with in our bubble had already gotten pretty excited by the technology.', 'But I remember a lot of the discussion that first week was, why hadn’t this happened before?']], 'Factors Differentiating ChatGPT': ['The user experience and conversational style set ChatGPT apart from previous AIs.', ['I think the user experience mattered a lot.', 'It’s very much inspired by texting.']], 'Integration into Daily Life': ['AI will be integrated through voice and enable efficient task completion.', ['You’ll be able to do this with two-way voice, and it’ll feel real time.', 'You can imagine a world where you have a fairly simple and short conversation with the model, and a huge amount of things get done on your behalf.']], 'Expanding Interface': ['The interface will be available everywhere and will transform the way people interact with the world.', ['I think it’s everywhere, all at once.', 'We’ll just expect all the products and services we use to have some intelligence baked in.']], 'Risks and Benefits of AI': ['AI has the potential for both positive and negative impacts on humanity.', ['The scary part is just sort of putting this lever into the world will for sure have unpredictable consequences.', 'AI is the technology that the world, that people have always wanted.', 'I think we can do a lot to maximize the good and manage and mitigate the bad.']], 'Concerns about Identity Verification': ['AI technology poses risks in terms of identity verification and potential scams.', ['That’s going to be a real problem and a real problem soon.', 'You can’t trust a voice you hear over the phone anymore.']], 'Solutions for Identity Verification': ['Various solutions, such as code words and video verification, can help address the issue.', ['People will use code words they’ll verify over video.', 'We’ll just need a combination of technical and social solutions to operate in a different way.']], 'Impact on Social Media': ['AI can both improve and worsen the problems associated with social media.', ['I think social media is in such a volatile place right now that I’m of course nervous about it.', 'I think these things are just hard to predict.']], 'Managing AI Risks': ['Managing AI risks requires vigilance, regulation, and open discussions.', ['We won’t successfully manage it if we’re not extremely vigilant about the risks.', 'We need to talk very frankly about how badly it could go wrong.']], "OpenAI's Mission and Structure": ['OpenAI is a non-profit organization with a subsidiary to support its mission.', ['We’re a non-profit that has a capped profit subsidiary.', 'The shape of this technology requires a different than normal incentive system.']], 'Government Regulation of AI': ['Regulation is needed for powerful AI models, reporting, audits, and safety evaluations.', ['I think that [we need regulation for] models that are above a certain power threshold.', 'They should have the oversight of the government. They should be audited by external orgs.']], 'Global Oversight': ['International coordination is necessary for regulating powerful AI, similar to atomic energy.', ['I think we are calling for something that would affect us the most.', 'We’ve come together as a global community before for very powerful technologies.']], "OpenAI's Responsibility": ['OpenAI aims to educate policymakers, involve civil society, and deploy technology responsibly.', ['It is our responsibility to educate policymakers and the public about what we think is happening.', 'It is our institutions and civil society’s role to figure out what we as a society want.']], 'Future Challenges and Outlook': ['AI development requires careful navigation, policy implementation, and addressing inequality.', ['This is just different than anything else. Society is going to fundamentally change.', 'We’ve got to figure out to manage this and have this go well.', 'I think AI very naturally will raise the floor in a big way.']], 'Short-Term and Long-Term Regulation': ['Short-term regulation can be implemented, while long-term coordination may take more time.', ['I think we can get short-term AI regulation done for sure.', 'I’m somewhat optimistic that the longer-term coordination is doable too.']], 'Comprehensive Regulation': ['Ensuring comprehensive and effective regulations requires transparency and public input.', ['It is our responsibility to educate policymakers and the public about what we think is happening.', 'The conversation really needs to start now.']], 'Wealth Redistribution': ['AI has the potential to reduce inequality and raise the standard of living.', ['I hope AI can reduce inequality and dramatically lift up the floor in the world.', 'I think AI very naturally will raise the floor in a big way.']], 'Balancing Progress and Caution': ['AI development requires careful consideration, research, and societal input.', ['Acting with care and caution is important.', 'The whole goal is to build something here that makes people’s lives better.']], 'AI Development and Policy': ['AI progress should involve public engagement, policy implementation, and long-term planning.', ['This is just different than anything else. Society is going to fundamentally change.', 'It’s very important to get it right, and the whole world is not getting disrupted this year.', 'The whole goal is to build something here that makes people’s lives better.']], 'Evaluating Progress': ['Progress should be assessed based on understanding, societal impact, and alignment technology.', ['If the models are improving in ways that we don’t fully understand, that would be one.', 'If there’s significant societal disruption, that would be another.']], "OpenAI's Approach": ['OpenAI believes in engaging with the world, seeking input, and building for the benefit of society.', ['It is our responsibility to educate policymakers and the public about what we think is happening.', 'The conversation really needs to start now.']]})
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
          <div id="home-header">
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