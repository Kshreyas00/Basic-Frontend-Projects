const startstopBtn = document.getElementById("SSp");
const timerer  = document.getElementById("timer");

let T = 0;

startstopBtn.addEventListener("click",function(){
    

    timer();
    startstopBtn.textContent = "Stop";
    
    
})



function timer(){
    

      setInterval(()=>{
        timerer.textContent = T++; 
      },1000)

}


