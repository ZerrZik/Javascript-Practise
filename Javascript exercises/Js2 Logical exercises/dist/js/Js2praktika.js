// 1 uzduotys

let n = 20;

if (n>0) {
    console.log("Skaicius geras");
} else if (n == 0){
    console.log("Ivestas nulis")
} else {
    console.log("Skaicius blogas");
}

//2 uzduotys
let sv = 2;

if (sv==1) {
    console.log("Eikite per pereja");
} else if (sv==2) {
    console.log("Palaukite");
} else if (sv==3){
    console.log("Sustokite");
} else {
    console.log("Ivestas skaicius nera nei 1, nei 2, nei 3");
}

//3 uzduotys
let k = 8;
let d = 2;
let kn = 5;

if (d*kn>=k) {
    console.log("Knygos telpa i dezes")
} else {
    console.log("Knygos netelpa i dezes")
}

//4 Uzduotys
let sk = 1221;
let last = sk % 10;
let first = Math.floor(sk / 1000) %10;
let middleFirst = Math.floor (sk /100) %10;
let middleSecond = Math.floor(sk / 10) %10;

// if (first==last){
//     if(middleFirst==middleSecond){
//         console.log("Skaicius yra polindromas");
//     } else {
//         console.log("Skaicius nera polindromas")
//     }
// } else {
//     console.log("Skaicius nera polindromas")
// }

if(first == last && middleFirst == middleSecond ){
    console.log("Skaicius yra polindromas");
} else {
    console.log("Skaicius nera polindromas");
}

//5 Uzduotys
let bilietoNr = 444444;
let sestSkaitmuo = bilietoNr % 10;
let penkSkaitmuo = Math.floor(bilietoNr / 10) %10;
let ketvSkaitmuo = Math.floor(bilietoNr /100) %10;
let trecSkaitmuo = Math.floor(bilietoNr /1000) %10;
let antrSkaitmuo = Math.floor(bilietoNr /10000) %10;
let pirmSkaitmuo = Math.floor(bilietoNr /100000) %10;
let suma = pirmSkaitmuo + antrSkaitmuo + trecSkaitmuo + ketvSkaitmuo + penkSkaitmuo + sestSkaitmuo
console.log(suma);

if(suma % 4 == 0) {
    console.log("Bilietas laimingas")
} else {
    console.log("Jusu bilietas nieko nelaimejo")
}

//6 Uzduotys
let metai = 2004;

if(metai % 4 ==0 && metai % 100 != 0) {
    console.log("Metai keliamieji")
} else {
    console.log("Metai nekeliamieji")
}

//7 Uzduotys
let skc = 12321;
let Sk5 = skc % 10;
let Sk4 = Math.floor(skc /10) %10;
let Sk3 = Math.floor(skc /100) %10;
let Sk2 = Math.floor(skc /1000) %10;
let Sk1 = Math.floor(skc /10000) %10;

if (Sk1 == Sk5 && Sk2==Sk4){
    console.log("Skaicius polindromas")
} else {
    console.log('Skaicius nepolindromas')
}

//8 Uzduotys
let kauliukoSk=6;

if(kauliukoSk %2 ==0){
    console.log("Tvarko vyresnelis")
} else {
    console.log('Tvarko jaunesnis')
}

//9 Uzduotys
let p1 = 5;
let p2 = 8;
let p3 = 9;

if(p1>p2 && p1>p3){
    console.log("Pirmas gavo geriausia pazymi")
} else if(p2>p1 && p2>p3){
    console.log("Antras gavo geriausia pazymi")
} else{
    console.log("Trecias gavo geriausia pazymi")
}

//10 Uzduotys
let day28 = 28;
let day30 = 30;
let day31 = 31;
let menuo = 4;

if (menuo<=0 || menuo>=12){
    console.log("Nera tiek menesiu")
} else if(menuo==4 || menuo==6 || menuo==9 || menuo==11){
    console.log(day30)
} else if(menuo==2){
    console.log(day28)
} else{
    console.log(day31)
}

// 11 Užduotys
// . Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro 
// kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie 
// tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite: 
// jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, 
// m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos


let v1 = 8; //Petro isejimo is namu valandos
let m1 = 29; //Petro isejimo is namu minutes
let v = 9; //Pamokos pradzios valandos
let m = 5; //Pamokos pradzios minutes
let m2 = 43; // kelione iki mokyklos

if(v*60+m >= v1*60+m1+m2) {
    console.log("Petras nepaveluos");
} else {
    console.log("Petras paveluos");
}

//12 Užduotys
// . Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti 
// lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti 
// negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti:
// Trikampį sudėlioti negalima.

let degtN = 7;

if (degtN%3 === 0 && degtN!== 0 ){
    console.log("Trikampį sudėlioti galima");
}   else {
    console.log ("Trikampį sudėlioti negalima")
}

//13 Užduotys
// Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri 
// metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms 
// skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių 
// žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. 
// Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti 
// spausdinama: Metai neolimpiniai

let mm = 2008;
let olimp = mm-1896;

if (olimp%4===0){
    console.log((olimp/4)+1);
} else {
    console.log("Metai neolimpiniai");
}

//14 Uzduotys
// Žinomi kvadratinės lygties ax2 +bx+c=0 koeficientai a, b, c. Parašykite programą, kuri 
// rastų lygties sprendinius. Pasitikrinkite:a=1, b=2, c=1, kompiuterio ekrane turi būti 
// rodomas rezultatas: vienas sprendinys 1.00 a=1, b=4, c=3, kompiuterio ekrane turi būti 
// rodomas rezultatas: du sprendiniai 3.00 1.00 a=1, b=3, c=4, kompiuterio ekrane turi būti 
// rodomas rezultatas: nėra sprendinių

let aa = 1;
let bb = 4;
let cc = 3;
let diskriminantas = (bb*bb)-4*aa*cc;
let pirmSpr = ((-bb) + Math.sqrt(diskriminantas))/(2*aa);
let antrSpr = ((-bb) - Math.sqrt(diskriminantas))/(2*aa);

if (diskriminantas===0){
    console.log("Vienas sprendinys: "+ (-bb/2*aa));
} else if(diskriminantas>0){
    console.log("Du sprendiniai: "+pirmSpr+ " " +antrSpr);
} else {
    console.log("Nera sprendiniu");
}

//15 Uzduotys
// Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų 
// kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius 
// ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 
// porcijas, liks centų 10

let cent = 50;
let pp = 20;
let leduPorcijos = Math.floor(cent/pp)

if(cent >= pp){
    console.log("Saulius nusipirks " +leduPorcijos+ "porcijas, liks "+ (cent-(leduPorcijos*pp)) +"centu")
} else {
    console.log ("Neturi pakankamai pinigu");
}

//16 Uzduotys
// Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių prekių. Į mašiną telpa m dėžių 
// prekių. Sukurkite programą, kuri apskaičiuotų ir kompiuterio ekrane parodytų, kiek kartų 
// k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į parduotuvę. 
// Pasitikrinkite: jei n = 100, m = 14, tai k = 8.

let nnn = 13;
let mmm = 14;
// let kartai = Math.ceil(nnn/mmm);
let kartai = Math.floor(nnn/mmm);

if(nnn > 0 && mmm > 0 ){
    console.log(kartai+1);
} else {
    console.log("Prekiu vezti nereikia");
}

//17 Uzduotys
// Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu 
// vienetu, o mažesnį padidintu vienetu.

let sveikasA = -8;
let sveikasB = -3;

if(sveikasA> sveikasB){
    console.log("Didesni skaiciu sumaziname vienetu: " + (sveikasA - 1) + " Mazesni skaiciu padidiname vienetu " + (sveikasB + 1));
} else if (sveikasB > sveikasA){
    console.log("Didesni skaiciu sumaziname vienetu: " + (sveikasB - 1) + " Mazesni skaiciu padidiname vienetu " + (sveikasA + 1));
} else {
    console.log("Skaiciai yra lygus arba neigiami");
}

//Salyginiai uzdaviniai2

//1 Uzduotys
// Parašykite programą, kuri apskaičiuotų, kiek knygų k vidutiniškai per metus perskaito 
// vienas mokyklos bibliotekos lankytojas. Žinomas vidutiniškai per vieną mėnesį 
// perkaitytų knygų skaičius v ir vidutiniškai per metus apsilankiusiųjų bibliotekoje skaičius 
// n. Pasitikrinkite: Įvedę v = 120 , n = 800, turėtume gauti: k = 2;

let vv = 120;
let lankytojai = 800;

if ((vv*12) / lankytojai > 0){
    console.log(Math.ceil(vv*12 / lankytojai));
} else {
    console.log("Biblioteka buvo uzdaryta rekonstrukcijai");
}

//2 Uzduotys
// Parašykite programą, kuri apskaičiuotų, kiek vidutiniškai keleivių k važiuoja į Vilnių 
// viename traukinio vagone, jei žinomas traukinio keleivių skaičius n, keleivių vykstančių 
// ne į Vilnių, skaičius m ir vagonų skaičius v. Pasitikrinkite: Įvedę n = 100 , m = 20 ir v = 
// 4, turėtume gauti: k = 20;

let kelSk = 100;
let neIVln = 20;
let vagonuSk = 4;

if(kelSk > 0){
    console.log("I vilniu vaziuoja viename vagone " + ((kelSk-neIVln)/4) + " keleiviu");
} else {
    console.log("Traukinis be keleiviu");
}

//3 Uzduotys
// Atnaujinus sodo namą, jo kaina išaugo 25%. Rašant skelbimą apie šį namą, buvo 
// padaryta klaida — neteisingai nurodyta naujoji kaina. Kokia turėtų būti naujoji namo 
// kaina, kai pradinė yra n eurų, o nauja parašyta kaina p eurų? Pasitikrinkite: Kai n = 
// 54000, p=60000, turi būti spausdinama: nauja namo kaina 67500.

let pradKaina = 54000;
let naujaKaina = 60000;

if (pradKaina > 0){
    console.log (((naujaKaina - pradKaina)*1.25)+naujaKaina);
} else {
    console.log("Namas neparduodamas");
}

//4 Uzduotys
// Viename ūkyje surinkta n (realus) tonų obuolių derliaus, o kitame surinkta m (realus) 
// tonų mažiau. Kiek tonų surinkta abiejuose ūkiuose? Pasitikrinkite: Kai n = 39.2, m=0.4, 
// turi būti spausdinama: abiejuose ūkiuose surinkta 78.

let surinktas1 = 39.2;
let maziau = 0.4;

if (surinktas1 > 0){
    console.log("Abiejuose ukiuose surinkta " + ((surinktas1 - maziau)+surinktas1));
} else {
    console.log("derliaus nebuvo");
}

//5 Uzduotys
// . Senį besmegenį sudaro trys sniego rutuliai. Popieriuje jie atrodo kaip skrituliai. 
// Mažiausio skritulio spindulys r. Sudarykite programą, kuri apskaičiuotų kiekvieno 
// skritulio plotą, jei kitų apskritimų spinduliai 2 kartus didesni už prieš tai esantį? 
// Pasitikrinkite: Kai r=1, turi būti spausdinama: skritulių plotai 3.14, 12.56 ir 50.24

let rSpind1 = 1;
let pi = 3.14;

if (rSpind1 > 0){
    console.log("Skrituliu plotai " +(pi*(rSpind1*rSpind1))+ " bei "+ (pi*(rSpind1*rSpind1)*4)+ " bei " +(pi*(rSpind1*rSpind1)*16));
}
else {
    console.log("nenustatytas plotas")
}

//6 Uzduotys
// Turime šešis atsitiktinius skaičius nuo 1000 iki 9999. Surikiuoti juos didėjimo tvarka

rd1 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd1);
rd2 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd2);
rd3 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd3);
rd4 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd4);
rd5 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd5);
rd6 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd6);

console.log("---------------------------")
// 1 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

if(rd2>rd3){
    let xxx = rd2;
    rd2 = rd3;
    rd3 = xxx;
}

if(rd3>rd4){
    let xxx = rd3;
    rd3 = rd4;
    rd4 = xxx;
}

if(rd4>rd5){
    let xxx = rd4;
    rd4 = rd5;
    rd5 = xxx;
}

if(rd5>rd6){
    let xxx = rd5;
    rd5 = rd6;
    rd6 = xxx;
}
//2 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

if(rd2>rd3){
    let xxx = rd2;
    rd2 = rd3;
    rd3 = xxx;
}

if(rd3>rd4){
    let xxx = rd3;
    rd3 = rd4;
    rd4 = xxx;
}

if(rd4>rd5){
    let xxx = rd4;
    rd4 = rd5;
    rd5 = xxx;
}
//3 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

if(rd2>rd3){
    let xxx = rd2;
    rd2 = rd3;
    rd3 = xxx;
}

if(rd3>rd4){
    let xxx = rd3;
    rd3 = rd4;
    rd4 = xxx;
}
//4 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

if(rd2>rd3){
    let xxx = rd2;
    rd2 = rd3;
    rd3 = xxx;
}
//5 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

console.log(rd1);
console.log(rd2);
console.log(rd3);
console.log(rd4);
console.log(rd5);
console.log(rd6);
