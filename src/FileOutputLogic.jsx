import { useRef } from "react";
import FileOutPutButtonOne from "./FileOutPutButtonOne";
import FileOutPutButtonTwo from "./FileOutPutButtonTwo";

const FileOutputLogic = (props) => {
  const contentOutputTargetRef = useRef(null);
  const downloadFileNew = useRef(null);

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
    <>
      <div className="buttonContainers">
        <FileOutPutButtonOne contentOutputTargetRef={contentOutputTargetRef}
          ContentTarget={props.ContentTarget} downloadFile={downloadFile}
        />
        <FileOutPutButtonTwo
          contentOutputTargetRef={contentOutputTargetRef}
          ContentTarget={props.ContentTarget} downloadFile={downloadFile}
        />
        <a className="downloadButton" href="Wait" ref={downloadFileNew}>
          Download Completed File
        </a>
      </div>
      <p>Conversion Preview:</p>
      <textarea
        ref={contentOutputTargetRef}
        placeholder="Conversion Preview..."
      />
    </>
  );
};

export default FileOutputLogic;
