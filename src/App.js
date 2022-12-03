import "./App.css";
import { useRef } from "react";
import FileOutputLogic from "./FileOutputLogic";

function App() {
  const inputFileRef = useRef(null);
  const contentTargetRef = useRef(null);

  function getFile() {
    if (inputFileRef.current === null);
    else {
      if (
        "files" in inputFileRef.current &&
        inputFileRef.current.files.length > 0
      ) {
        placeFileContent(
          contentTargetRef.current,
          inputFileRef.current.files[0]
        );
      }
    }
  }

  function placeFileContent(target, file) {
    readFileContent(file)
      .then((content) => {
        target.value = content;
      })
      .catch((error) => console.log(error));
  }

  function readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mine Craft Gen APP</h1>
        <h2>Kitty Shizz's PreFab Convertor</h2>
        <div className="fileInputContainer">
          <label>Specify a file:</label>
          <input type="file" onChange={getFile} ref={inputFileRef} />
        </div>

        <textarea ref={contentTargetRef} placeholder="Upload your Text Doc and See it Here."/>

        <h2>Output File:</h2>
        <div className="outPutFileContainer">
          <FileOutputLogic ContentTarget={contentTargetRef} />
        </div>
      </header>
    </div>
  );
}

export default App;
