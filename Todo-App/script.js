const Addbutton = document.getElementById("Add");
const input    = document.getElementById("input");
const taskList  = document.getElementById("task-list");


Addbutton.addEventListener("click",function(){
    if(input.value===''){
        alert("Please Enter Your Task");
    }

    const li = document.createElement("li");
    const donebutton = document.createElement("button");
    const deletebutton = document.createElement("button");

    const btnwrapperdiv = document.createElement('div');
    btnwrapperdiv.style.display = "flex";
    btnwrapperdiv.style.gap = "10px";

    donebutton.id = 'Donebtn';
    deletebutton.id = 'Delbtn';

    donebutton.textContent = 'Done';
    deletebutton.textContent = 'Delete';



    li.textContent = input.value.trim();
    btnwrapperdiv.appendChild(donebutton);
    btnwrapperdiv.appendChild(deletebutton);
    
    li.appendChild(btnwrapperdiv);


    donebutton.addEventListener("click",function(){
      li.style.textDecoration = "line-through";
    })



    taskList.appendChild(li);


    input.value = '';


})


