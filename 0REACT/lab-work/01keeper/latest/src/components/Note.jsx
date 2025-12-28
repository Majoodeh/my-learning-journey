import React from "react";

const Note = () => {
  return (
    <>
      <div className="note" draggable="true">
        <h1 contentEditable="true">This is note 1</h1>
        This is note content
      </div>
      <div className="note" draggable="true">
        <h1 contentEditable="true">This is note 2</h1>
        This is note content
      </div>
      <div className="note" draggable="true">
        <h1 contentEditable="true">This is note 3</h1>
        This is note content
      </div>
    </>
  );
};

export default Note;
