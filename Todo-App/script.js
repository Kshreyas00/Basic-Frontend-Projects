const addbutton = document.getElementById("Addbtn");
const input   = document.getElementById("input");
const tasklist = document.getElementById("tasklist");


addbutton.addEventListener("click",function(){
   const li = document.createElement("li");
  li.textContent = input.value.trim();

  tasklist.appendChild(li);


   

  li.addEventListener("click",function(){
    li.remove();
  })


  input.value = '';
   
})