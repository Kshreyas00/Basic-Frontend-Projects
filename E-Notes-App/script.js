const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent"); 
const addNoteBtn = document.getElementById("addNoteBtn");   
const notesContainer = document.getElementById("notesContainer"); 

let notes = [];

function addNote() {  
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();

    if(title === '' || content === '') {
        alert("Please Fill Both Title and Content");
        return;
    }

    const note = {
        id: Date.now(),
        title: title,
        content: content,
        date: new Date().toLocaleDateString() 
    };

    notes.push(note);
    displayNotes(); 
    clearInputs();  
}

function displayNotes() {
    notesContainer.innerHTML = '';

    notes.forEach(note=>{
        const notediv = document.createElement("div");
        notediv.className = 'note-item';

        notediv.innerHTML = `
         <h3>${note.title}</h3>
         <p>${note.content}</p>
         <small>Created: ${note.date}</small>
         <button class = "delete-btn">Delete</button>
         `
         notesContainer.appendChild(notediv);
    })
}

addNoteBtn.addEventListener("click",function(){
    addNote();    
})
