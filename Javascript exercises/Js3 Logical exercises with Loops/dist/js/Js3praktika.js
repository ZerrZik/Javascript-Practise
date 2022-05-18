console.log("test");


//1 Uzduotys
for(let i = 0 ;i < 5; i++){
    console.log("Labas");
}

// 2 Uzduotys
for(let i = 0 ;i < 5; i++){
    console.log(i);
}

// 3 Uzduotys
for(let i = 0;i < 50; i+=10){
    console.log(i);
}

console.log("******************");

// 4 Uzduotys
for(let i = 49;i < 54; i++){
    console.log(i);
}

console.log("***5 Uzduotys**");

// 5 Uzduotys
for(let i = 4; i > -1; i--){
    console.log(i);
}

console.log("****6 Uzduotys");

// 6 Uzduotys
for (let i = 0; i<6; i++){
    console.log(Math.floor(Math.random() * 11));
}

console.log("***7 Uzduotys");

//7 Uzduotys

let i = 0;
while (i !==5){
    i = Math.floor(Math.random() * 11);
    console.log(i);
}

//8 Uzduotys
// naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

console.log("***8 Uzduotys");

let suma = 0;
while (suma <= 100){
    x = Math.floor(Math.random() * 11);
    suma = x+suma;
    console.log("pridejome "+x+", gaunama suma "+suma);
}

console.log("***9 Uzduotys");

// 9 Uzduotys
// naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
let y = 0;
let count = 0;
while (y !==5 && y!==7) {
        y = Math.floor(Math.random() * 11);
        console.log(y);
        count = count +1;
}
console.log("ciklu skaicius: "+count);

console.log("***10 Uzduotys");

//10 Uzduotys
// Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n centimetrus coliais ir atvirkščiai.
let colis = 2.54;

function converter(n){
    for (let i = 1; i<=n; i++){
        console.log(i + "cm yra " + (i/colis)+ "coliu");
    } 
    for (let j = 1; j<=n; j++){
        console.log(j + "coliu yra " + (j*colis)+ "centimetru");
    }
}
converter(5);

console.log("***11 Uzduotys");

// 11 Uzduotys
// Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite 
// kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, 
// indėlį

let investicija = 100;
let palukanos = 0.02;
let metai = 5;
let indelioSuma;

indelioSuma = investicija;
for(let i = 1; i <= metai; i++){
    indelioSuma = indelioSuma * (1.0 + palukanos);
    console.log("Per " +i+ " metus, esant 2% palukanom sukaupta " +indelioSuma.toFixed(2));
}
console.log("***12 Uzduotys");

// 12 Uzduotys
// Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei 
// tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už 
// duotąjį, raskite tą skaičių

for(let i = 10; i <=99; i++){
    let desimtys = Math.floor(i/10);
    let vienetai = i%10;
    if((desimtys == vienetai *3) && (vienetai*10+desimtys)+36 ==i) {
        console.log("Musu skaicius "+i);
    }
}

console.log("***13 Uzduotys")
// 13 uzduotys 
// Raskite keturženklius skaičius, kurių pirmasis skaitmuo yra lyginis, o skaičius nesidalina 
// iš 998 ?

for(let i = 1000; i<=9999;i++){
    if((Math.floor((i/1000)%2) ==0) && (i%998 !==0))
    console.log("Musu skaiciai "+i);
}

console.log("***14 Uzduotys")
// 14 Uzduotys 
// . Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra 
// keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 
// metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros 
// keliamuosius metus.
for(let i = 1;i <2022; i++){
    if(i%4==0 && i%100 !==0 || i%400 == 0){
        console.log("Metai keliamieji " +i);
    } 
}

console.log("***15 Uzduotys")
// 15 Uzduotys
// Norėdami paskatinti žmones naudotis visuomeniniu miesto transportu, savivaldybės 
// tarnautojai sugalvojo, kad bilietai, kurie baigiasi lyginiu skaitmeniu, kainuos perpus 
// pigiau. Bilietai, kurie baigiasi nuliu, parduodami be nuolaidos. Parenkite programą, 
// spausdinančią visų bilietų, kurie kainuos pigiau, numerius. Bilietai pradedami numeruoti 
// nuo m-tojo, baigiami n-tuoju. Kai m = 997, o n = 1003, tuomet turi būti rodomi tokie 
// bilietų numeriai: 998 1002

for(let i = 997; i<=1003;i++){
    if(i%2===0 && i%10!==0){
        console.log("Musu bilietu numeriai "+i);
    }
}
console.log("***16 Uzduotys")
// 16 Uzduotys
// Duotas natūralus skaičius n. Raskite pirmą skaitmenį

function pirmasSkaitmuo(skaicius){
    while (skaicius > 9){
        skaicius = Math.floor(skaicius/10);
    }
    console.log("Pirmas skaitmuo yra: " + skaicius);
}

pirmasSkaitmuo(6545);

console.log("***17 Uzduotys")
//17 Uzduotys
//Duotas natūralusis skaičius n. Raskite skaitmenų sumą.

// let nn = 727272;
// let sum = 0; //Kuomet naudojame daugyba pasirenkame 1

// while (nn > 0){
//     yy = nn%10; // Paimame paskutini skaiciu
//     nn = Math.floor(nn/10); 
//     sum = sum +yy;
// }
// console.log("Skaitmenu suma "+sum);

function skaitmenuSuma(skaitmenis){
    let sum = 0;
    while(skaitmenis > 0){
        sum += skaitmenis%10;
        skaitmenis = Math.floor(skaitmenis/10);
    }
    console.log("Skaitmenu suma: "+sum)
} 
skaitmenuSuma(563);

console.log("***18 Uzduotys")
//18 Uzduotys
//Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =321

function reverse(skaicius){
    let atgalinisSkaicius = 0;
    while(skaicius >0){
        let paskutinisSkaitmuo = skaicius %10;
        atgalinisSkaicius = atgalinisSkaicius*10 + paskutinisSkaitmuo;
        skaicius = Math.floor(skaicius/10);
    }
    console.log("Atgalinis skaicius duotajam yra "+atgalinisSkaicius)
}

reverse(123);

console.log("***19 Uzduotys")
// 19 Uzduotys
// Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią 
// skaitmenį.

function littleBig(skaicius){
    let maziausias = 10;
    let didziausias = -1;

    while(skaicius > 0){
        let paskutinisSkaitmuo = skaicius % 10;
        if(paskutinisSkaitmuo > didziausias){
            didziausias = paskutinisSkaitmuo;
        }
        if(paskutinisSkaitmuo < maziausias){
            maziausias = paskutinisSkaitmuo;
        }
        skaicius = Math.floor(skaicius / 10);
    }
    console.log("Didziausias skaitmuo yra "+ didziausias+ ", o mazausias skaitmuo yra "+maziausias);
}

littleBig(2511);


