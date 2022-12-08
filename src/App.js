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
        <div className="headerContainer">
          <div className="imageTitle">
            <img src="./images/title.png" alt="Kitty Shizz MineCraft" />
          </div>
        </div>

        <div className="fileInputContainer">
          <label>Specify a file: lol</label>
          <input type="file" onChange={getFile} ref={inputFileRef} />
          <p>File Preview:</p>
        </div>

        <textarea
          ref={contentTargetRef}
          placeholder="Preview and Edit Your Uploaded Unmodified File Here..."
        />

        <h2>Output File:</h2>
        <div className="outPutFileContainer">
          <FileOutputLogic
            ContentTarget={contentTargetRef}
            FileNameInput={inputFileRef}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
