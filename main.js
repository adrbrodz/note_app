var noteList = [];
var id = 0;

function getNoteId() {
    id += 1;
    return id;
}

function createEmptyNote() {
    const noteId = getNoteId();
    document.getElementById("savedNotes").innerHTML +=
    `<div class="note" id="note">
        <div class="note-body">
            <div class="nav">
                <button id="delete-button" onclick="deleteNote(${noteId})">x</button>
            </div>
            <div id="note-text-area">
                <textarea rows="10" placeholder="Start writing your note..." id="note-text"></textarea>
            </div>
            <button id="save-button" onclick="saveNote()">Save</button>
        </div>
    </div>`
    noteList.push({noteId: noteId, text: ""})
};

function deleteNote(noteId) {
    noteList = noteList.filter( note => note.noteId != noteId)
    clearNotes();
    generateNotes();
}
function clearNotes() {
    document.getElementById("savedNotes").innerHTML = "";
}
function generateNotes() {
    for ( let i = 0; i < noteList.length; i++ ) {
        const note = noteList[i]
        const noteId = note.noteId;
        const noteText = note.text;
        addNewNote(noteId, noteText);
    }
}
function addNewNote(noteId, noteText) {
    document.getElementById("savedNotes").innerHTML +=
    `<div class="note" id="note">
        <div class="note-body">
            <div class="nav">
                <button id="delete-button" onclick="deleteNote(${noteId})">x</button>
            </div>
            <div id="note-text-area">
                <textarea rows="10" placeholder="Start writing your note..." id="note-text">${noteText}</textarea>
            </div>
            <button id="save-button" onclick="saveNote()">Save</button>
        </div>
    </div>`
};

function saveNote() {
    
}