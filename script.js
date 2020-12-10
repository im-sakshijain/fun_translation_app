//input
//var username=prompt("Give Me Your Name")
//processing
//var welcomeMessage="this script works! "+username
//script
//alert(welcomeMessage);
var btnTranslate= document.querySelector("#btn-translate");
//console.log(btnTranslate)
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
//outputDiv.innerText="sakshi"
//console.log(output)
//console.log(txtInput)
function clickHandler() {
        //console.log("clicked!");
        //console.log("input",txtInput.value);
        outputDiv.innerText="Translated: " + txtInput.value

    };
btnTranslate.addEventListener("click", clickHandler)

