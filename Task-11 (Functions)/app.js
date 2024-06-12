//Task-1
//logGreeting() adında funksiya tərtib edin. Funksiya name adında parametr qəbul etsin və konsola «[name] is a JS developer» mesajı çıxarsın.
function logGreeting(name) {
    console.log(name);
}
logGreeting("[name] is a JS developer")

//Task-2
//stifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.Funksiyanı 3 müxtəlif ad üçün çağırın.
function showName(firstname){
 console.log(firstname);
}
showName("Tural is active now")
showName("Murad is active now")
showName("Kamran is active now")

//Task-3
//Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.Fərqli arqumentlərlə funksiyanı üç dəfə çağırın və fərqli arqumentlər göndərək test edin.
function calcMax(eded1, eded2, eded3){
    
    let big = eded1
    if (eded2 > big) {
        big = eded2
    }
    else if(eded3 > big){
        big = eded3
    }
    console.log(big);
}
calcMax(12, 11, 15)
calcMax(9, 12, 3)
calcMax(22,12,13)
//Task-4
/*Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin cəmin rublla göstərən funksiya yazın.
Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.Bir dollar üçün məzənnə 75 rubl təşkil edir. Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.*/ 
function calcCem(rubl, dollar, cem) {
    let dr = dollar * cem + rubl
      console.log(`Bütün depozitlər üzrə məbləğ: ${dr} rubl`);
}
calcCem(1200, 20, 75)
//Task-5
//Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() adında funksiyası tərtib edin.
function calcMin(first, second) {
    let min = first
    if (second < min) {
        min = second
    }
    console.log(min);
}
calcMin(12,14)
calcMin(17,13)

//Task 6
//Parametr olaraq 2 fərqli mətn qəbul edən və onları birləşdirib geri döndürən concatenateStrings() adında funskiya yazın.
function concatenateStrings(a , b ) {
    let ab = a + b
    console.log(ab);
}
concatenateStrings("Lorem", "ipsum")
//Task-7
//Parametr kimi length və width dəyərlərini alan və həmin parametrlərə görə kvadratın sahəsini hesablayıb consola çıxaran calculateRectangleArea() funksiyası yazı
function  calculateRectangleArea(length , width) {
    let kvadrat = length * width
    console.log(`${kvadrat} Kvadrat`);
}
calculateRectangleArea(21, 32)

//Task-8
//Bir ədədi parametr kimi qəbul edən və onun cüt olub olmadığını yoxlayan isEven() adlı funksiya yazın. Rəqəmin cüt olub olmadığını göstərən bir mesajı konsolda göstərin.
function isEven(value) {
    if (value % 2 === 0) {
        console.log(`${value} cütdür`);
    }else{
        console.log(`${value} cüt deyil `);
    }
   
}
isEven(4)
isEven(5)

//Task-9
//Müsbət tam ədədi parametr kimi qəbul edən və onun sadə ədəd olub-olmadığını yoxlayan isPrime() adlı funksiya yazın. Əgər ədəd sadədirsə funksiya true, əks halda false qaytarır.
/*function isPrime(number) {
    if (number <= 1) {
        console.log(false);
    }
    for (let i = 2; i <= number; i++) {
      if (number % i === 0) {
        console.log(false);
      }
      else{
        console.log(true);
      }
    }
}
isPrime(3)*/
