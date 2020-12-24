var outputPass=`<div class="label">Hurray!!You are a lucky person!</div><img width="100%" height="200px" src="/undraw_feeling_happy_jymo.svg" alt="image">`
var outputFail=`<div class="label">Oops!!Your birthday is not a lucky number!</div><img width="100%" height="200px" src="/undraw_walk_dreaming_u58a.svg" alt="image">`

var alertCloseIcon = document.querySelector("#crossIcon");
var privacyPolicyText = document.querySelector("#privacyPolicyText");
var alertBoxDiv = document.querySelector("#alertBox");
var form = document.querySelector("#form");

var date = document.querySelector("#datePicker");
var luckyNo = document.querySelector("#luckyNo");

var outputDiv= document.querySelector(".output");


alertCloseIcon.addEventListener('click', (e)=>{
    alertBoxDiv.style.display = "none";
});

privacyPolicyText.addEventListener('click', ()=>{
    alertBoxDiv.style.display = "flex";
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var dateString = ((date.value).split('-')).join("");
    var sum=0;
    for(letter of dateString){
     sum = sum + Number(letter);  
    }
    var luckyNoJS= Number(luckyNo.value);
    if(sum%luckyNoJS ===0){
        outputDiv.innerHTML = outputPass;
    }
    else{
        outputDiv.innerHTML = outputFail
    }
} );

