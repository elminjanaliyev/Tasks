//Task-1
//İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana kimi 7 - ədədi qədər artırın. Son dəyəri konsola çıxarın.

 let count = prompt("iki reqemli eded daxil edin:");
if (count.length === 2 ) {
    let number = parseInt(count);
    for (let i = number; i < 107; i += 7){
        console.log(i);
    }
} else {
    console.log("iki reqemli eded daxil edin");
}
//Task-2
//Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın. Proqram N ədədini istifadəçidən soruşur.

let userN = prompt("bir reqem daxil edin")

    for (let a = 0; a < userN; a++) {
        console.log(`I know how to use cycles ${a}`);
     };
//Task-3
//Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

for (let index = 100; index < 1000; index +=10) {
   console.log(index);
}
//Task-7
//For dövrün köməyi ilə 10-a qədər bütün ədədlərin hasilin tapan proqram tərtib edin. Alınan dəyəri konsola çıxarın.

let num = 1
for (let reqem = 1; reqem <=10; reqem++) {
  num *=reqem;
}
console.log(`1den 10-a qeder olan butun ededlerin hasili: ${num}`);
//Task-9
//1-dən 100-ə qədər olan tək ədədləri toplayın və nəticəni göstərin.

let toplam = 0;
for (let eded = 1; eded <= 100; eded++){
  if (eded % 2 !== 0) {
    toplam += eded;
  }
}
console.log("1-dən 100-ə qədər olan tək ədədlərin cəmi:", toplam);