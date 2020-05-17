import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notes-context';

const NoteList = () => {
    const { notes } = useContext(NotesContext);

    return notes.map((note, idx) => (
        <Note key={idx} title={note.title} body={note.body} />
    ));
};

export default NoteList;
