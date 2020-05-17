import React, { useContext } from "react";
import NotesContext from "../context/notes-context";
import { useMousePosition } from "../hooks/useMousePosition";

export default ({ title, body }) => {
    const { notesDispatch } = useContext(NotesContext);
    const mousePos = useMousePosition();

    const onRemove = () => {
        notesDispatch({
            type: "REMOVE_NOTE",
            title
        });
    };

    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>x: {mousePos.x}, y: {mousePos.y}</p>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};