const addbutton = document.getElementById("Addbtn");
const notetitle = document.getElementById("Notetitle");
const notecontent = document.getElementById("notecontent");
const notetitlenav = document.getElementById("notestitle");
const notetitlelist = document.getElementById("notetitlelist");
const notecontainer = document.getElementById("notecontentdiv");



addbutton.addEventListener("click",function(){
    if(notetitle.value ==='' || notecontent.value===''){
        return alert("Please Fill Both Title and Content!"); 
    }


    const li = document.createElement("li");

    li.textContent = notetitle.value;

    notetitlelist.appendChild(li);
    
    
   


    li.addEventListener("click",function(){

        const div =  document.createElement("div");

        div.innerHTML = `<h1>${li.textContent}</h1> <p><b>${notecontent.value}</b></p>`;

        const deleteN = document.createElement("button");
        const EditN   = document.createElement("button");

        deleteN.id = "DeleteN";
        EditN.id  = "EditN";

        deleteN.textContent = "Delete";
        EditN.textContent = "Edit";

        div.appendChild(deleteN);
        div.appendChild(EditN);


        deleteN.addEventListener("click",function(){
            confirm("If You Want to Delete your Note!");
            div.remove();
        })
     

        notecontainer.appendChild(div);

    })


})


