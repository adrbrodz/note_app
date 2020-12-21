var noteList = [];
var id = 0;

function createEmptyNote() {
    const noteId = noteList.length;
    document.getElementById("savedNotes").innerHTML +=
    `<div class="note" id="note">
        <div class="note-body">
            <div class="nav">
                <button id="delete-button" onclick="deleteNote(${noteId})">x</button>
            </div>
            <div id="note-text-area">
                <textarea rows="10" placeholder="Start writing your note..." id="note-text-${noteId}"></textarea>
            </div>
            <button id="save-button" onclick="saveNote(${noteId})">Save</button>
        </div>
    </div>`
    noteList.push({noteId: noteId, text: ""})
    clearNotes();
    generateNotes();
};

function deleteNote(noteId) {
    noteList = noteList.filter( note => note.noteId != noteId)
    clearNotes();
    id = noteList.length;
    generateNotes();
}
function clearNotes() {
    id = 0;
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
                <textarea rows="10" placeholder="Start writing your note..." id="note-text-${noteId}">${noteText}</textarea>
            </div>
            <button id="save-button" onclick="saveNote(${noteId})">Save</button>
        </div>
    </div>`
};

function saveNote(noteId) {
    const noteText = document.getElementById("note-text-"+noteId).value;
    noteList.forEach(function(note) {
        if (note.noteId === noteId ) {
            note.text = noteText;
        }
    });
    console.log(noteList)
}