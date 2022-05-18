// 1 uzduotys
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra 
// atsitiktiniai skaičiai nuo 5 iki 25

const masyvas= [];
for(let i = 0; i<30;i++){
    masyvas[i] = Math.floor(Math.random()*21)+5;
}
console.log(masyvas);

//2 Uzduotys

//2a
// Naudodamiesi 1 uždavinio masyvu:
// a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let daugiauUz10 = 0;
for(let i = 0; i < masyvas.length;i++){
    if(masyvas[i] > 10){
        daugiauUz10++;
    }
}
console.log("Reiksmiu, didesniu uz 10 yra: "+daugiauUz10);

//2b
// b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
let max =0;
let indeksai = [];
// for(let i = 0; i < masyvas.length; i++){
//     if(masyvas[i]>max){
//         max = masyvas[i];
//     }   
// }

// for(i = 0; i < masyvas.length;++i){
//     if(max === masyvas[i]){
//         indeksai.push(i);
//     }
// }

for ( i = 0; i < masyvas.length; i++){
    if(masyvas[i] == max){
        indeksai.push(i);
    } else if(masyvas[i] > max) {
        max = masyvas[i];
        // indeksai = [i]; 
        indeksai = [];
        indeksai.push(i);
    }
}

console.log("Didziausia reiksme yra: " + max + ", indeksai yra " + indeksai);

//2c
// c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let lyginiuIndeksuReiksmiuSuma = 0;
let nelyginiuIndeksuReiksmiuSuma = 0;
// for(i = 0; i < masyvas.length; i++){
//     if( i %2 ==0){
//         lyginiuIndeksuReiksmiuSuma = lyginiuIndeksuReiksmiuSuma + masyvas[i];
//         }
// }

for( i = 0; i < masyvas.length; i = i+2){
    lyginiuIndeksuReiksmiuSuma += masyvas[i];
}

for( i = 1; i < masyvas.length; i = i+2){
    nelyginiuIndeksuReiksmiuSuma += masyvas[i];
}

console.log("Lyginiu indeksu reiksmiu suma yra: "+lyginiuIndeksuReiksmiuSuma);
console.log("Lyginiu indeksu reiksmiu suma yra: "+nelyginiuIndeksuReiksmiuSuma);

//2d
// d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

let naujasMasyvas = [];
for(i = 0; i < masyvas.length;i++){
    naujasMasyvas[i] = masyvas[i] - i;
}

console.log("Naujas masyvas: "+naujasMasyvas);

//2e
// e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad 
// bendras masyvas padidėtų iki indekso 39;

for(i = 0; i < 10; i++){
    masyvas.push(Math.floor(Math.random()*21)+5);
}
console.log("Naujas masyvas su papildomais 10 elementu: ", masyvas);

//2f
// f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš 
// neporinių indekso reikšmių, o kitas iš porinių;

let lyginiuIndeksuMasyvas = [];
let nelyginiuIndeksuMasyvas = [];

for(i = 0; i < masyvas.length; i++){
    if(masyvas[i]%2 ==0){
        lyginiuIndeksuMasyvas.push(masyvas[i]);
    } else {
        nelyginiuIndeksuMasyvas.push(masyvas[i]);
    }
}

console.log("Lyginiai",lyginiuIndeksuMasyvas);
console.log("Nelyginiai",nelyginiuIndeksuMasyvas);

//2g
// g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

for(i = 0 ; i < lyginiuIndeksuMasyvas.length; i++){
    if(i % 2 ==0 && lyginiuIndeksuMasyvas[i] > 15){
            lyginiuIndeksuMasyvas[i] = 0;
        }
}

console.log(lyginiuIndeksuMasyvas);

//2h
// h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] > 10){

    }
}

//3 Uzduotys
// let unikalusMasyvas1 = [];
// let unikalusMasyvas2 = [];

// while(unikalusMasyvas1.length < 100){
//     let random1 = Math.floor(Math.random()*900)+100;
//     if(!unikalusMasyvas1.includes(random1)){
//         unikalusMasyvas1.push(random1);
//     }
// }
// console.log(unikalusMasyvas1);

// let test = [2,8,3,1,12,12,695,241,136];
//     console.log(test);
//     for (i = 0; i < test.length; ++i){
//         for(let j = 0; j < test.length; ++j){
//             if (test[i] < test[j]){
//                 let temp = test[j];
//                 test[j] = test[i];
//                 test[i] = temp;
//             }
//         }
//     }
//     console.log(test);

// let unikalusMasyvas1 = [];
//     let unikalusMasyvas2 = [];
//     while(unikalusMasyvas1.length < 100){
//         let random1 = Math.floor(Math.random()*900)+100;
//         if (!unikalusMasyvas1.includes(random1)){
//             unikalusMasyvas1.push(random1);
//         }
//     }

//     console.log(unikalusMasyvas1);

//     for (i = 0; i < 100; ++i){
//         let random2 = Math.floor(Math.random()*900)+100;
//         if (!unikalusMasyvas2.includes(random2)){
//             unikalusMasyvas2.push(random2);
//         } else {
//             i--;
//         }
//     }
//     console.log(unikalusMasyvas2);