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
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

//outputDiv.innerText="sakshi"
//console.log(output)
//console.log(txtInput)
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with Server! Try Again After sometime")
}
function clickHandler() {
        //console.log("clicked!");
        //console.log("input",txtInput.value);
        //outputDiv.innerText="Translated: " + txtInput.value
        var inputText = txtInput.value;//taking input
        fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json =>  {
            var translatedText=json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

    };
btnTranslate.addEventListener("click", clickHandler)

