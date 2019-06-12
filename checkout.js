// Get the input field
let input = document.querySelector(".caps");

// Get the warning text
let text = document.getElementById("text");

// When the user presses any key on the keyboard, run the function
input.addEventListener("keyup", function (event) {

    // If "caps lock" is pressed, display the warning text
    if (event.getModifierState("CapsLock")) {
        text.style.display = "block";
    } else {
        text.style.display = "none"
    }
});
const phone = document.querySelector('.validation');
const name = document.querySelector('.name');
const err = document.querySelector('.err');  

function validate() {
        let regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        if (regex.test(phone.value)) {
            console.log(phone.value);
            return true;
        } else {
        const txt = document.querySelector('.text'); 
        txt.style.display='block';      
        }
        let rgx =/[a-zA-Z]+/g;
        if (rgx.test(name.value)) {
            console.log(name.value);
            return true;
        } else {
          err.style.display='block';     
        }
    }