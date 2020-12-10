//input
//var username=prompt("Give Me Your Name")
//processing
//var welcomeMessage="this script works! "+username
//script
//alert(welcomeMessage);
var btnTranslate= document.querySelector("#btn-translate");
//console.log(btnTranslate)
var txtInput=document.querySelector("#txt-input");
console.log(txtInput)
function clickHandler() {
        console.log("clicked!");
        console.log("input",txtInput.value);

    };
btnTranslate.addEventListener("click", clickHandler)

