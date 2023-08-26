let Screen= document.getElementById('Screen');
buttons = document.querySelectorAll('button');
let ScreenValue = '';
for(items of buttons){
    item.addEventListerener('click', (e)=>{
        buttonText = e.target.innerText;
    
        if(buttonText=='X'){
            buttonText = '*';
            ScreenValue += buttonText; 
            Screen.value = ScreenValue;
        }
        else if (buttonText =='C'){
            ScreenValue = "=";
            Screen.value = ScreenValue;

        }
        else if (buttonText =='='){
            Screen.value = eval(ScreenValue);
        }
        else{
            ScreenValue += buttonText; 
            Screen.value = ScreenValue;
        }

    })
}
