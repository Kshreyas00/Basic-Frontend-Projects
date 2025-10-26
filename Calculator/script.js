const display = document.getElementById("display");
const buttons = document.querySelectorAll('.btn');
let currentvalue = '';


buttons.forEach(function(button){
    button.addEventListener("click",function(){
        const value = button.getAttribute('data-value');

            if(value==='='){
                currentvalue = eval(currentvalue);
                display.value = currentvalue;
            }
            else{
                currentvalue = currentvalue+value;
                display.value = currentvalue;
            }

            if(value==='C'){
                display.value = '';
                currentvalue = '';
            }
        
    });
})