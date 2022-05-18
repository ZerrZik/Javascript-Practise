console.log("test");

document.getElementById("heading").innerHTML = "Pavadinimas idetas su JS";

document.getElementsByClassName;
document.getElementsByName.value;
document.getElementsByTagName;

// innerHTML - tai kas yra tarp tagu.
// attribute - galime pakeisti atributa.
// style - stiliaus priskyrimas tagui.

// setAttribute(attribute, value) - galime pakeisti atributa;

// document.createElement("");
// document.removeChild("");
// document.appendChild("");
// document.replaceChild("");
// document.write("");

// nroime pakeisti nuorodos href

function changeURL(url) {
    document.getElementById("link").setAttribute("href",url);
}

let today = new Date();
document.getElementById("date").innerHTML = "Copyright "+today.getFullYear();

//Stiliaus keitimas

document.getElementById("date").style.color = "green";

// EVENTS

// peles klaviso paspaudimas
// peles zymeklio uzvedimas
// peles ratuko (scroll) 
// bet kurio klaviso paspaudimas
// inputo laukelio reiksmes pasikeitimas
// formos submit'inimas

function showDate(){
    document.getElementById("heading2").innerHTML = Date();
}

document.getElementById("heading2").onclick = showDate;

//hover

function mouseOver(obj){
    obj.innerHTML = "Welcome";
}

function mouseOut(obj){
    obj.innerHTML = "Hover me";
}

///Form Validation

function validateForm(){
    let fieldValue = document.forms["form1"]["firstName"].value;
    if(fieldValue == "") {
        alert("First Name must be filled!");
        return false;
    } 
}


function checkNumber(){
    let number = document.getElementById("number").value;
    let message;
    if(isNaN(number) || number<1 || number>10){
        message = "Ivedete bloga skaiciu"
    } else {
        message = "Ivesta teisingai"
    }
    document.getElementById("message").innerHTML = message;
}

// EventListener

document.getElementById("text1").addEventListener("click", function(){
    alert("Laba diena!");
});
document.getElementById("text1").addEventListener("click", function(){
    this.style.color = "blue";
});

// Kvadrato paspaudimas

function toggleBox(){
    let box = document.getElementById("box2");
    box.classList.toggle("green");
}

document.getElementById("box2").addEventListener("click", toggleBox);


// Turime sesis atsitiktinius skaicius nuo 1000 iki 9999. Surikiuoti juos didejimo tvarka.

const numbers = [];

for (let i = 0; i<6; i++){
    numbers[i] = Math.floor(Math.random()*(9999-1000))+1000;
}

let sorted = numbers.sort(function(a,b){
    return a-b
}).join (" | ");

console.log(sorted);