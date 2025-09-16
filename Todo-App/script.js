const addbutton = document.getElementById("Addbtn");
const input   = document.getElementById("input");
const tasklist = document.getElementById("tasklist");


addbutton.addEventListener("click",function(){
  const li = document.createElement("li");
  li.textContent = input.value.trim();

  const donebtn = document.createElement("button");
  const deletebtn = document.createElement("button");

  donebtn.textContent = "Done";
  deletebtn.textContent = "Delete";

  donebtn.id = "donebutton";
  deletebtn.id = "deletedutton";

   li.appendChild(donebtn);
   li.appendChild(deletebtn);


  tasklist.appendChild(li);



   

  li.addEventListener("click",function(){
    
      donebtn.addEventListener("click",function(){
      li.style.textDecoration = 'line-through';
      li.style.color = "yellowgreen";

      deletebtn.addEventListener("click",function(){
        li.style.backgroundColor = "red";
        alert("If you want to delete this task");
        li.remove();
      })

    
  })

  })


  input.value = '';
   
})