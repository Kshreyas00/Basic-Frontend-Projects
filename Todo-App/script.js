const Addbutton = document.getElementById("Add");
const input    = document.getElementById("input");
const taskList  = document.getElementById("task-list");


const completecountele = document.getElementById("completed-count");
const pendingCountele  = document.getElementById("pending-count");



function UpdateTaskCount()
{
  const allTasks = taskList.querySelectorAll("li");
  let completeCount = 0;
  let pendingCount = 0;

  allTasks.forEach(task=>{
    if(task.iscompleted){
      completeCount++;
    }
    else{
      pendingCount++;
    }
  })

  completecountele.textContent = completeCount;
  pendingCountele.textContent = pendingCount;

   console.log(`Completed: ${completeCount}, Pending: ${pendingCount}`);
}


Addbutton.addEventListener("click",function(){
    if(input.value===''){
        alert("Please Enter Your Task");
    }

    const li = document.createElement("li");
    const donebutton = document.createElement("button");
    const deletebutton = document.createElement("button");

    li.iscompleted = false;

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
    li.style.opacity = "0.4";
    donebutton.textContent = "Completed";
    donebutton.disabled = true;

    li.iscompleted = true;

    UpdateTaskCount();
   })

   deletebutton.addEventListener("click",function(){
      const confirmdelete = confirm("Are you sure to delete this todo?");
      
      if(confirmdelete){
        li.remove();
        UpdateTaskCount();
      }
});

    taskList.appendChild(li);


    input.value = '';


})




input.addEventListener("keypress",function(e){
  if(e.key==="Enter"){
    Addbutton.click();
  }

})