console.log("test");

// Task1
// Dvieju skaiciu palyginimas

function task1 (){
    let n1 = window.prompt("Irasykite pirmaji skaiciu", "0");
    let n2 = window.prompt("irasykite antraji skaiciu", "0");


    if (parseInt(n1)>parseInt(n2)) {
        console.log("Palyginus skaiciu " +n1+ " su skaiciumi "+n2+ " didesnis yra skaicius " +n1);
    } else if(parseInt(n1)<parseInt(n2)){
        console.log("Palyginus skaiciu" +n1+ " su skaiciumi "+n2+ " didesnis yra skaicius " +n2);
    } else {
        console.log("Skaiciai " +n1+ " ir " +n2+ " yra lygus");
    }
}

// Task2
// Reikia rasti triju skaiciu galutini zenkla, pvz. 2, -8, 9

function task2(a,b,c){
    if (a>0 && b>0 && c>0){
        console.log("+");
    } else if (a<0 && b<0 && c<0){
        console.log("-");
    } else if(a>0 && b<0 && c<0){
        console.log("+");
    } else if(a<0 && b>0 && c<0){
        console.log("+");
    } else if(a<0 && b<0 && c<0){
        console.log("+");
    } else if(a>0 && b<0 && c>0){
        console.log("-");
    } else {
        console.log("Nuliu negali buti")
    }
}

// Task3
// Sukurti programa, kuri rastu lyginius ir nelyginius skaicius masyve.

function task3(){
    for(let i =0; i<15; i++){
        if (i===0){
            console.log(i+" yra lyginis");
        } else if (i%2===0){
            console.log(i+ " yra lyginis");
        } else {
            console.log(i+ " yra nelyginis");
        }
    }
}
// Task4
// Sukurti programa, kuri patikrintu skaicius nuo 0 iki 100 ir prie skaiciu, kurie dalijasi is triju, paraso trystrys, is penkiu - penkipenki, o ir is penkiu ir is triju - tryspenki.

function task4(){
    for(let i =0; i<=100; i++){
        if(i%3===0 && i%5===0){
            console.log(i+"tryspenki");
        }
        else if(i%3===0){
            console.log(i+ "trystrys");
        } else if(i%5===0){
            console.log(i+ "penkipenki");
        } else {
            console.log(i);
        }
    }
}

// Task5
//*
//**
//***
//****
//*****

function task5(){
    let star = "";
    for (let i = 1; i<=5; i++){
        for(let x = 0; x < i;x++){
            star = star+"*";
        }
        console.log(star);
        star = "";
    }
}

// Nested Loops

const children = [
    "Jonas",
    "Petras",
    "Antanas",
    "Maryte",
    "Onute"
];

const adults = [
    "Kazys",
    "Jonas",
    "Maryte",
    "Juozas",
];

const sameNames = [];

for (let i = 0; i<children.length; i++){
    for (let j = 0; j<adults.length; j++){
        if(children[i]===adults[j]){
            sameNames.push(children[i]);
        }
    }
}

console.log(sameNames);

// Task6
// Reikia rasti dazniausiai pasitaikanti elementa masyve. Atsakymas gali buti pvz "3 (5 kartai)"

const array = [3, "a", "a", "a", 3, 2 , 5 , "b", "b"];

function mostFrequent(array){
    let frequency = 1;
    let m = 0;
    let item;
    for (let i = 0; i<array.length;i++){
        for(let j = i; j<array.length;j++){
            if (array[i]===array[j]){
                m++;
            }

            if (frequency<m){
                frequency=m;
                item=array[i];
            }
        }
        m=0;
    }
    console.log(item+" ("+frequency+ " kartai)");
}

// Task7
// Mini forma suvesti masyvo elementus ir atspausdinti masyva

let x = 0;
const list = [];

function addToArray(){
    list[x] = document.getElementById("text1").value;
    alert("Element: "+list[x]+ " Added to array");
    x++;
    document.getElementById("text1").value = "";
}

function showArray(){
    let ul = "<ul>";
    for (let i = 0; i<list.length;i++){
        ul+= "<li>"+list[i]+"</li>";
    }
    ul += "</ul>"
    document.getElementById("result").innerHTML = ul;
}