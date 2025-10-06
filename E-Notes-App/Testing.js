
const addnotebtn = document.getElementById("Addnotebtn");
const notecontent = document.getElementById("notecontent");
const notetitle = document.getElementById("notestitle");
const NotesList = document.querySelector(".Notes-list");
const DisplayNote = document.getElementById("displaynote");


let notecounter = 0;


addnotebtn.addEventListener("click",function(){
   
    const Ntitle = notetitle.value.trim();
    const Ncontent = notecontent.value.trim();

    if(Ntitle===''|| Ncontent===''){
        alert("Please Enter Both Notetitle and Notecontent");
        return;
    }

    notecounter++;

    const Notediv = document.createElement("div");
    Notediv.className = "MyNote";
    Notediv.id = "MyNote - "+notecontent;

    Notediv.textContent = Ntitle;

    Notediv.addEventListener("click",function(){
        DisplayNote.innerHTML = `
         <h2>${Ntitle}</h2>
         <p>${Ncontent}</p>`;
         
    });

    NotesList.appendChild(Notediv);

    
});