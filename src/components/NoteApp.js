import React, { useState, useEffect, useReducer } from 'react';
import NoteList from './NoteList';
import notesReducer from '../reducers/notes';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    const [notes, notesDispatch] = useReducer(notesReducer, []);

    useEffect(() => {
        notesDispatch({
            type: 'POPULATE_NOTES',
            notes: JSON.parse(localStorage.getItem('userNotes')) || []
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('userNotes', JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, notesDispatch }} >
            <h1>Notes</h1>
            <NoteList />
            <p>New Note:</p>
            <AddNoteForm />
        </NotesContext.Provider>
    );
};

export default NoteApp;
