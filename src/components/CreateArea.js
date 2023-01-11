import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    event.preventDefault();
  }

  function submitNote() {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function expandHandle() {
    setExpand(true);
  }

  return (
    <form className="create-note">
      <input
        type="text"
        name="title"
        value={note.title}
        onClick={expandHandle}
        onChange={handleChange}
        placeholder="Title"
      />

      {expand && (
        <textarea
          name="content"
          rows="3"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
        ></textarea>
      )}
      {expand && (
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      )}
    </form>
  );
}

export default CreateArea;
