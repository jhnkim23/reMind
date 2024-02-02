import React, { useState } from 'react';
import Button from "src/components/Button/Button";
import Mindmap from "src/components/Mindmap/Mindmap";
<<<<<<< HEAD
=======
import 'src/pages/Home.css';
>>>>>>> 60fd2fd33d8fcb119c59114553bc6a5fce87de95

function Home() {
    let t_file, a_file;
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
<<<<<<< HEAD

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
=======
    const [infoDict, setInfoDict] = useState({});

    function handleClick(e) {
      console.log(e.target.id)
      setNodes([{'id': 'Conversation with Sam Altman on ChatGPT', 'type': 'input', 'data': {'label': 'Conversation with Sam Altman on ChatGPT'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Applications of ChatGPT', 'data': {'label': 'Applications of ChatGPT'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Viral Reaction to ChatGPT Launch', 'data': {'label': 'Viral Reaction to ChatGPT Launch'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Integration of AI into Everyday Life', 'data': {'label': 'Integration of AI into Everyday Life'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Trust in For-Profit AI Companies', 'data': {'label': 'Trust in For-Profit AI Companies'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Regulation of AI', 'data': {'label': 'Regulation of AI'}, 'position': {'x': 0, 'y': 0}}, {'id': "Government's Role in Regulating AI", 'data': {'label': "Government's Role in Regulating AI"}, 'position': {'x': 0, 'y': 0}}, {'id': 'Global Oversight Board', 'data': {'label': 'Global Oversight Board'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Specific Proposals', 'data': {'label': 'Specific Proposals'}, 'position': {'x': 0, 'y': 0}}, {'id': 'U.S. Regulation', 'data': {'label': 'U.S. Regulation'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Risks and Benefits of AI', 'data': {'label': 'Risks and Benefits of AI'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Concerns about Voice Manipulation', 'data': {'label': 'Concerns about Voice Manipulation'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Impact on Social Media', 'data': {'label': 'Impact on Social Media'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Worst Case Scenario', 'data': {'label': 'Worst Case Scenario'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Income Inequality and Universal Basic Income', 'data': {'label': 'Income Inequality and Universal Basic Income'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Future Developments of ChatGPT', 'data': {'label': 'Future Developments of ChatGPT'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Slowing Down AI Progress', 'data': {'label': 'Slowing Down AI Progress'}, 'position': {'x': 0, 'y': 0}}, {'id': "OpenAI's Mission and Revenue", 'data': {'label': "OpenAI's Mission and Revenue"}, 'position': {'x': 0, 'y': 0}}, {'id': 'Engaging with the World and Public Input', 'data': {'label': 'Engaging with the World and Public Input'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Timeline for Addressing Inequality', 'data': {'label': 'Timeline for Addressing Inequality'}, 'position': {'x': 0, 'y': 0}}, {'id': 'AI and Social Media', 'data': {'label': 'AI and Social Media'}, 'position': {'x': 0, 'y': 0}}, {'id': 'Timing for AI Policy', 'data': {'label': 'Timing for AI Policy'}, 'position': {'x': 0, 'y': 0}}]);
      setEdges([{'id': 'Conversation with Sam Altman on ChatGPT-Applications of ChatGPT', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Applications of ChatGPT', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Viral Reaction to ChatGPT Launch', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Viral Reaction to ChatGPT Launch', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Integration of AI into Everyday Life', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Integration of AI into Everyday Life', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Trust in For-Profit AI Companies', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Trust in For-Profit AI Companies', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Regulation of AI', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Regulation of AI', 'type': 'smoothstep'}, {'id': "Regulation of AI-Government's Role in Regulating AI", 'source': 'Regulation of AI', 'target': "Government's Role in Regulating AI", 'type': 'smoothstep'}, {'id': "Government's Role in Regulating AI-Global Oversight Board", 'source': "Government's Role in Regulating AI", 'target': 'Global Oversight Board', 'type': 'smoothstep'}, {'id': "Government's Role in Regulating AI-Specific Proposals", 'source': "Government's Role in Regulating AI", 'target': 'Specific Proposals', 'type': 'smoothstep'}, {'id': "Government's Role in Regulating AI-U.S. Regulation", 'source': "Government's Role in Regulating AI", 'target': 'U.S. Regulation', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Risks and Benefits of AI', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Risks and Benefits of AI', 'type': 'smoothstep'}, {'id': 'Risks and Benefits of AI-Concerns about Voice Manipulation', 'source': 'Risks and Benefits of AI', 'target': 'Concerns about Voice Manipulation', 'type': 'smoothstep'}, {'id': 'Risks and Benefits of AI-Impact on Social Media', 'source': 'Risks and Benefits of AI', 'target': 'Impact on Social Media', 'type': 'smoothstep'}, {'id': 'Risks and Benefits of AI-Worst Case Scenario', 'source': 'Risks and Benefits of AI', 'target': 'Worst Case Scenario', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Income Inequality and Universal Basic Income', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Income Inequality and Universal Basic Income', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Future Developments of ChatGPT', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Future Developments of ChatGPT', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Slowing Down AI Progress', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Slowing Down AI Progress', 'type': 'smoothstep'}, {'id': "Conversation with Sam Altman on ChatGPT-OpenAI's Mission and Revenue", 'source': 'Conversation with Sam Altman on ChatGPT', 'target': "OpenAI's Mission and Revenue", 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Engaging with the World and Public Input', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Engaging with the World and Public Input', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Timeline for Addressing Inequality', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Timeline for Addressing Inequality', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-AI and Social Media', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'AI and Social Media', 'type': 'smoothstep'}, {'id': 'Conversation with Sam Altman on ChatGPT-Timing for AI Policy', 'source': 'Conversation with Sam Altman on ChatGPT', 'target': 'Timing for AI Policy', 'type': 'smoothstep'}]);
      setInfoDict({'Applications of ChatGPT': ['ChatGPT is used for summarization, translation, and drafting tweets.', ['One thing I use it for every day is help with summarization.', 'I used it to translate an article for someone I’m meeting next week.', 'I used it to help me draft a tweet that I was having a hard time with.']], 'Viral Reaction to ChatGPT Launch': ['The launch of ChatGPT generated excitement, but some had expected it to happen earlier.', ['We thought it was going to excite people, but the people we spend a lot of time with in our bubble had already gotten pretty excited by the technology.', 'But I remember a lot of the discussion that first week was, why hadn’t this happened before?']], 'Integration of AI into Everyday Life': ['AI will be integrated into various aspects of life, including voice interactions and performing tasks on behalf of users.', ['You’ll be able to do this with two-way voice, and it’ll feel real time.', 'You can [eventually] imagine a world where, as you are talking, it’s like the Star Trek holodeck.', 'You have a fairly simple and short conversation with the model, and a huge amount of things get done on your behalf.']], 'Trust in For-Profit AI Companies': ['OpenAI is a non-profit with a capped profit subsidiary, and the shape of AI technology requires a different incentive system.', ['Well, first of all, we’re not a for-profit company. We’re a non-profit that has a capped profit subsidiary.', 'I’m very in favor of capitalism. I think it is the least bad system that we have yet invented.', 'I just think that the shape of this technology requires a different than normal incentive system.']], 'Regulation of AI': ['Models above a certain power threshold should be regulated, audited, and evaluated for safety issues.', ['I think that [we need regulation for] models that are above a certain power threshold.', 'They should have the oversight of the government. They should be audited by external orgs.', 'That would be a really great policy. I hope that becomes global at some point.']], "Government's Role in Regulating AI": ['Government should have oversight, audit models, and set safety standards.', ['I think that [we need regulation for] models that are above a certain power threshold.', 'They should have the oversight of the government. They should be audited by external orgs.', 'That would be a really great policy. I hope that becomes global at some point.']], 'Global Oversight Board': ['An international coordination body is needed for regulating AI, similar to the IAEA for atomic energy.', ['Yeah, look, I am deeply not an expert here.', 'But I think we are calling for something that would affect us the most.', 'But I think these systems are already quite powerful and will get tremendously more powerful.']], 'Specific Proposals': ['Generated content should be tagged, and international coordination on powerful training hardware is necessary.', ['There are some minor short-term things that I think hopefully are very non-contentious.', 'But this thing that I really think the world needs, this IAEA-like international coordination on very powerful training hardware, that’s going to take a while and is super important to do.']], 'U.S. Regulation': ['Short-term AI regulation is feasible, and longer-term coordination is optimistic.', ['I think we can get short-term AI regulation done for sure.', 'I’m somewhat optimistic that the longer-term coordination is doable too.']], 'Risks and Benefits of AI': ['AI has the potential for both positive and negative impacts, and managing the risks is crucial.', ['Definitely one of the confusing parts of this technology is just the overall power—the good, the potential bad.', 'The exciting parts are almost too long to list, but I think this is transforming the way people do their work.', 'I think we can do a lot to maximize the good and manage and mitigate the bad.']], 'Concerns about Voice Manipulation': ['Voice manipulation poses risks, and society needs to adapt to prevent fraudulent activities.', ['That’s going to be a real problem and a real problem soon.', 'We just all need to start telling people this is coming.', 'We’ll just need a combination of technical and social solutions to operate in a different way.']], 'Impact on Social Media': ["AI can both improve and worsen social media, but it's hard to predict the exact outcome.", ['I think social media is in such a volatile place right now that I’m of course nervous about it.', 'I think these things are just hard to predict.']], 'Worst Case Scenario': ['AI has the potential for unpredictable consequences, but managing the risks is possible.', ['We can manage this, I am confident about that.', 'But the scary part is just sort of putting this lever into the world will for sure have unpredictable consequences.', 'I think the whole goal is to build something here that makes people’s lives better in hopefully a gigantic way.']], 'Income Inequality and Universal Basic Income': ['AI may deepen inequality, but it also has the potential to raise the floor and improve living standards.', ['I hope AI can reduce inequality and more than that, I hope it can dramatically lift up the floor in the world.', 'I’m OK with a world that has trillionaires in it if no one is in poverty.', 'I think AI very naturally, and we see this again and again through this one long technological revolution, will raise the floor in a big way.']], 'Future Developments of ChatGPT': ['ChatGPT will improve in generating better responses consistently, and future updates may include images, audio, and video.', ['But the thing that I think people are really going to be happy about is right now if you tried something 10,000 times and took the best one out of 10,000 responses, it’s pretty good for most questions, but not all the other ones.', 'GPT-4 has the knowledge most of the time, but you don’t always get its best answer.', 'If we can figure that out, and that’s like an open research nut to crack, that’ll be a big deal.']], 'Slowing Down AI Progress': ['Slowing down AI progress may be necessary if models improve in ways that are not fully understood or if there is significant societal disruption.', ['If the models are improving in ways that we don’t fully understand, that would be one.', 'If there’s significant societal disruption, that would be another.', 'If we don’t feel like we’re making sufficient progress on alignment technology for the projected capabilities of the next train run, that would be a third.']], "OpenAI's Mission and Revenue": ['OpenAI is mission-focused and prioritizes societal impact over revenue generation.', ['We set up a really thoughtful deal with Microsoft. We’re a super mission-focused company.', 'Yeah, I think so, but I don’t think we’ll squeeze it like other people would.', 'I’m sure we’ll grow a lot slower than we could.']], 'Engaging with the World and Public Input': ['OpenAI believes in engaging with the world, showing people the technology, and gathering input to build something that benefits society.', ['But there is nothing like putting something out and then going to talk to people.', 'That input from the world about what we’re doing, what we should do, is super important.', 'The whole goal is to build something here that makes people’s lives better in hopefully a gigantic way.']], 'Timeline for Addressing Inequality': ['Addressing income inequality may take years, and political feasibility is a factor.', ['I hope AI can reduce inequality and more than that, I hope it can dramatically lift up the floor in the world.', 'My sense is we are still years away, I don’t know how many, but a decent number of years at a minimum away from AI affecting the economy enough that we need to and are politically capable of getting something like that done.', 'I would still love for basic income to happen in the world today. I think it’s just a good policy AI aside, but it doesn’t seem politically feasible right now.']], 'AI and Social Media': ["AI's impact is more comparable to nuclear materials or synthetic biology than social media.", ['Actually, it doesn’t. The analogy on this is something closer to nuclear materials or synthetic biology in terms of how we have to think about it.', 'Now, one person can also do tremendous good; one person can cure cancer or some small number of people can cure cancer.', 'It’s not an inherently social experience.']], 'Timing for AI Policy': ['Policy implementation takes time, and it is important to show people the technology and gather their input.', ['For people to take this seriously, really engage with it, understand it, it’s not enough to tell them about it.', 'You have to show people and people need to use the technology themselves, get a sense for it, the limits, the benefits, the risks.', 'The conversation really needs to start now because it will take a while to figure this out, but every government is now paying serious attention.']]});
      // setNodes([{
      //   id: '1',
      //   data: { label: 'Hello' },
      //   position: { x: 0, y: 0 },
      // },
      // {
      //   id: '2',
      //   data: { label: 'World' },
      //   position: { x: 100, y: 100 },
      // },]);
      // setEdges([{ id: '1-2', source: '1', target: '2'},]);
>>>>>>> 60fd2fd33d8fcb119c59114553bc6a5fce87de95
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
<<<<<<< HEAD
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
=======
        <div id='box'>
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
            <Mindmap nodes={nodes} edges={edges} setNodes={setNodes} setEdges={setEdges} infoDict={infoDict}/>
          </div>
>>>>>>> 60fd2fd33d8fcb119c59114553bc6a5fce87de95
        </div>
      </>
    );
  }
export default Home;