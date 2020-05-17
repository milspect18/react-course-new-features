import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { notesDispatch } = useContext(NotesContext);

    const formSubmitted = (e) => {
        e.preventDefault();

        notesDispatch({
            type: 'ADD_NOTE',
            note: { title, body }
        });

        setBody('');
        setTitle('');
    };

    return (
        <form onSubmit={formSubmitted}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea
                placeholder="Add note body here"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button>Add Note</button>
        </form>
    );
};

export default AddNoteForm;
