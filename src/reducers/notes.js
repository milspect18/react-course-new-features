
export default (state, action) => {
    switch (action.type) {
        case 'POPULATE_NOTES':
            return action.notes;
        case 'ADD_NOTE':
            return state.concat(action.note);
        case 'REMOVE_NOTE':
            return state.filter((note) => action.title !== note.title);
        default:
            return state;
    }
}