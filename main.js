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
    noteList.push({noteId: noteId, text: "", state: "edit"})
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
        const state = note.state;
        addNewNote(noteId, noteText, state);
        if ( note.state === "saved" ) {
            document.getElementById("note-text-"+noteId).disabled = true;

        } else {
            document.getElementById("note-text-"+noteId).disabled = false;
        }
    }
}
function addNewNote(noteId, noteText, state) {
    if ( state === "edit" ) {
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
    } else {
        document.getElementById("savedNotes").innerHTML +=
        `<div class="note" id="note">
            <div class="note-body">
                <div class="nav">
                    <button id="edit-button" onclick="editNote(${noteId})"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg></button>
                    <button id="delete-button" onclick="deleteNote(${noteId})">x</button>
                </div>
                <div id="note-text-area">
                    <textarea rows="10" id="note-text-${noteId}">${noteText}</textarea>
                </div>
            </div>
        </div>`
    }

};

function saveNote(noteId) {
    const noteText = document.getElementById("note-text-"+noteId).value;
    noteList.forEach(function(note) {
        if ( note.noteId === noteId ) {
            note.text = noteText;
            note.state = "saved";
        }
    });
    clearNotes();
    id = noteList.length;
    generateNotes();
}

function editNote(noteId) {
    noteList.forEach(function(note) {
        if ( note.noteId === noteId ) {
            note.state = "edit";
        }
    })
    clearNotes();
    id = noteList.length;
    generateNotes();
}