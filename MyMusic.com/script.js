const input = document.getElementById("inputsong");
const searchbutton = document.getElementById("searchbtn");
const songindex = document.getElementById("song-index");


searchbutton.addEventListener("click",function(){
    const songname = input.value.trim();

    if(songname===''){
        alert("Please Enter a Song Name");
    }

    console.log("Searching for......",songname);
    
})