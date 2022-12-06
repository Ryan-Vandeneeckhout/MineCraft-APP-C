import { useRef, useState } from "react";
import BlockStateInput from "./BlockStateInput";
import FileOutPutButtonNPC from "./FileOutPutButtonNPC";
import FileOutPutButtonOne from "./FileOutPutButtonOne";
import FileOutPutButtonTwo from "./FileOutPutButtonTwo";
import NPCInput from "./NPCInput";

const FileOutputLogic = (props) => {
  const contentOutputTargetRef = useRef(null);
  const contentOutputTargetHoldDataRef = useRef(null);
  const downloadFileNew = useRef(null);
  const [valueInput, setValueInput] = useState(null);
  const [valueBlockInput, setValueBlockInput] = useState("beehive");

  if (props.ContentTarget === undefined || props.ContentTarget.length === 0);

  function downloadFile() {
    const blob = new Blob([contentOutputTargetRef.current.value], {
      type: "plain/text",
    });
    const fileUrl = URL.createObjectURL(blob);
    downloadFileNew.current.setAttribute("href", fileUrl);
    downloadFileNew.current.setAttribute(
      "download",
      props.FileNameInput.current.value.split("\\").pop()
    );
  }

  return (
    <div className="OutputArea">
      <div className="OutAreaButtonContainers">
        <div className="buttonContainers">
          <FileOutPutButtonOne
            contentOutputTargetRef={contentOutputTargetRef}
            ContentTarget={props.ContentTarget}
            downloadFile={downloadFile}
            contentOutputTargetHoldDataRef={contentOutputTargetHoldDataRef}
          />
          <FileOutPutButtonTwo
            contentOutputTargetRef={contentOutputTargetRef}
            contentOutputTargetHoldDataRef={contentOutputTargetHoldDataRef}
            ContentTarget={props.ContentTarget}
            downloadFile={downloadFile}
          />
          <FileOutPutButtonNPC
            valueInput={valueInput}
            valueBlockInput={valueBlockInput}
            contentOutputTargetRef={contentOutputTargetRef}
            downloadFile={downloadFile}
            contentOutputTargetHoldDataRef={contentOutputTargetHoldDataRef}
          />
          <a className="downloadButton" href="Wait" ref={downloadFileNew}>
            Download Completed File
          </a>
        </div>
        <NPCInput setValueInput={setValueInput} />
        <BlockStateInput valueBlockInput={valueBlockInput} setValueBlockInput={setValueBlockInput}/>
      </div>
      <div className="filePreviewArea">
        <p>Conversion Preview:</p>
        <textarea
          ref={contentOutputTargetRef}
          placeholder="Conversion Preview..."
        />
      </div>
    </div>
  );
};

export default FileOutputLogic;