import React, { useEffect } from "react";
import {
  CompositeDecorator,
  Editor,
  EditorState,
  convertFromRaw,
} from "draft-js";
import { useState } from "react";
import "../../Component/TaskContentField.css";

const SOPDisplayField = ({ sopInfo }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleStatus = (sopInfo) => {
    setEditorState(
      EditorState.createWithContent(convertFromRaw(sopInfo), strategyDecorator)
    );
  };

  useEffect(() => {
    handleStatus(sopInfo);
  }, []);

  return (
    <>
      <div
        style={{
          // width: "100%",
          // background: "#fff",
          // border: "1px solid #ddd",
          border: "none",
          // fontFamily: "Georgia serif",
          // boxSizing: "border-box",
          // fontSize: 16,
          paddingTop: "0px",
        }}
        className="RichEditor-root"
      >
        <div
          style={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            borderRadius: 5,
            justifyContent: "center",
            margin: "auto",
            // borderTop: "3px solid #ffaa64",
            // borderBottom: "3px solid #ffaa64",
            // border: "3px solid #ffaa64",
            padding: "5px 0",
          }}
        >
          <div style={{ fontSize: "20px" }}>Detail</div>
        </div>
        <div
          className="RichEditor-editor"
          // style={{ borderTop: "3px solid #ffaa64", margin: "0px" }}
          // style={{ border: "1px solid #ddd" }}
          style={{
            borderTop: "none",
            margin: "0px",
            border: "3px solid #ffaa64",
            borderRadius: 10,
          }}
        >
          <Editor
            blockStyleFn={getBlockStyle}
            // customStyleMap={styleMap}
            editorState={editorState}
            readOnly={true}
          />
        </div>
      </div>
    </>
  );
};

export default SOPDisplayField;

// const styleMap = {
//   CODE: {
//     backgroundColor: "rgba(0, 0, 0, 0.05)",
//     // fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
//     fontSize: 16,
//     padding: 2,
//   },
// };

function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    case "new-block-type-name":
      return {
        // component: CustomComponent,
        editable: false,
      };
    default:
      return null;
  }
}

// LINKS
const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};
const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a
      style={{ color: "blue", fontStyle: "italic" }}
      href={url}
      target="_blank"
    >
      {props.children}
    </a>
  );
};
const strategyDecorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
]);
