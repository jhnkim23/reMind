import Button from "src/components/Button";
import Mindmap from "src/components/Mindmap";

function Home() {
    let t_file, a_file;

    function handleClick(e) {
      console.log(e.target.id)
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
          <Mindmap/>
        </div>
      </>
    );
  }
export default Home;