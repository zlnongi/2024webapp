import React from "react";

function ModalView({ vContent, onClose }) {
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      ModalView
      <p>{vContent}</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}

export default ModalView;
