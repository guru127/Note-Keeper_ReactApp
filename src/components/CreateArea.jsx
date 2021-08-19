import React, { useState } from "react";

function CreateArea(props) {
  const [Note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function sumbitNote(e) {
    props.onAdd(Note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={Note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={Note.content}
        />
        <button onClick={sumbitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
