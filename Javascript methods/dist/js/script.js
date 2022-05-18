// Numbers and methods

let a = 5;
let b = 5.2569;
let c = 56e6; //56000000

//sveikas skaicius iki 15 zenklu, po kablelio gali buti 17.

let d = (0.2 + 0.1); //rezultatas 0.30000000000000004
console.log(d);

let e = ((0.2*10) + (0.1*10))/10;
console.log(e);

console.log(typeof a.toString());

let f = b.toString();
console.log(typeof f);

//suapvalinimas

b = b.toFixed(1);
console.log(b);

//String to number

b = Number(b);
console.log(b)
// b = parseInt(b);
// console.log(b);
b = parseFloat(b);
console.log(b);

//String methods
let word = "Ketvirtadienis";
console.log(word.length);

//Metodas teksto karpymui

let cars = "volvo, mazda, skoda";
let car = cars.slice(7,12); //jeigu rasome neigiamus skaicius, skaiciuoja nuo galo
console.log(cars);
console.log(car);

//substring() - tas pats kaip .slice tik nepriima neigiamu reiksmiu
let car2 = cars.substr(-5, 5);
console.log(car2);

//Replace part of string
let newCars = cars.replace("volvo","bmw");
console.log(newCars);

//Join string
let newWord = word.concat(", ",cars, ", Penktadienis");
console.log(newWord);

//Polindromo uzdavinys
let pol = 1221;
let g = pol.toString();
let gSplit= g.split("").reverse().join("");
let polReverse =parseInt(gSplit);

if (pol===polReverse){
    console.log("polindromas");
} else {
    console.log("Nera polindromas");
}

