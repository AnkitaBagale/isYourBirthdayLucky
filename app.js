const outputPass=`<div class="label">Hurray!!You are a lucky person!</div><img width="100%" height="200px" src="/undraw_feeling_happy_jymo.svg" alt="image">`
const outputFail=`<div class="label">Oops!!Your birthday is not a lucky number!</div><img width="100%" height="200px" src="/undraw_walk_dreaming_u58a.svg" alt="image">`

const alertCloseIcon = document.querySelector("#crossIcon");
const privacyPolicyText = document.querySelector("#privacyPolicyText");
const alertBoxDiv = document.querySelector("#alertBox");
const form = document.querySelector("#form");

const date = document.querySelector("#datePicker");
const luckyNo = document.querySelector("#luckyNo");

const outputDiv= document.querySelector(".output");


alertCloseIcon.addEventListener('click', (e)=>{
    alertBoxDiv.style.display = "none";
});

privacyPolicyText.addEventListener('click', ()=>{
    alertBoxDiv.style.display = "flex";
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const dateString = ((date.value).split('-')).join("");
    let sum=0;
    for(letter of dateString){
     sum = sum + Number(letter);  
    }
    const luckyNoJS= Number(luckyNo.value);
    if(sum%luckyNoJS ===0){
        outputDiv.innerHTML = outputPass;
    }
    else{
        outputDiv.innerHTML = outputFail
    }
} );

