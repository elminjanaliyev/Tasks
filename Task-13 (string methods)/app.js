//Task-1
let text = " John Doe"; // 7
let text1 = "A beautiful game"; // 14
console.log(text.replaceAll(" ", '').length);
console.log(text1.replaceAll(" ", '').length);

//Task-2
let firsttName = prompt("Tam adinizi daxil edin")
console.log(firsttName.slice(firsttName.indexOf(" ")));
console.log(firsttName.slice(0, firsttName.indexOf(" "))) 

//Task-3
let number = 16792*5437 
let cem = number
let a = cem.toString()
console.log(a[6]);
//Task-4
let qiymet = prompt("bir qiymet daxi edin Mes: 530.90")
let manat = qiymet.slice(0,3)
let qepik = qiymet.slice(4,6)
console.log(`${manat} manat ${qepik} qepik`);
//Task-5
let fullName = prompt('Soyad Ad ve Ata adiizi daxil edin');
let firstSpace = fullName.indexOf(' ');
let surname = fullName.slice(0, firstSpace); 
let secondName = fullName.slice(firstSpace + 1);
let lastSpace = secondName.lastIndexOf(' ');

let firstName = secondName.slice(0, lastSpace); 
let lastName = secondName.slice(lastSpace + 1); 
let result = firstName.charAt(0).toUpperCase() + '.';
if (lastName) {
    result += ' ' + lastName.charAt(0).toUpperCase();
}

console.log(`${surname} ${result}`);

//Task-6
//bunu tam yaza bilmedim
let date = prompt("Bir tarix daxil edin Mes: YYYY.MM.DD")
let dateTime = new Date(date)
for (let index = 1; index < date.length; index++) {
    if (date.length === 10) {
         console.log(date);
    }else{
        console.log("duzgun daxil edin");
    }
}

//Task-7
function firstIndexText(texts) {
    let index = texts.indexOf(".")
    return index
  }
  let texts = "lorem.ipsum.dolar"
  console.log(`"." işarəsinin birinci indexsi : ${firstIndexText(texts)} dir`);
  
  //Task-8
 let loremText = prompt("metin daxil edin")
if (loremText.includes('1') || loremText.includes('2') || loremText.includes('3') || loremText.includes('4') || loremText.includes('5') || loremText.includes('6') || loremText.includes('7') || loremText.includes('8') || loremText.includes('9')) {
    console.log("Daxil etdiyiniz metinde reqem var.");
}else{
    console.log("Daxil etdiyiniz Metinde reqem yoxdur.");
}

//Task-9
function repeatedSymbolCounter(string, char) {
    let deyer = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            deyer++
        }
        
    }
    return deyer;
}
let metin = "success"
let b = "c"
let fn = repeatedSymbolCounter(metin,b)
console.log(`${b} herifi metinde ${fn} defe tekrarlanib`)

//Task-10
function capitalize(str = "lOreM") {
    let lowerCase = str.toLowerCase();
    let UpperCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return UpperCase;
  }
  console.log(capitalize()); 

//Task-11
function snakeToKebab(stre) {
    return stre;
}
let snakeCase = "BU_TEST_UCUNDUR"
let kebabCase = snakeCase.toLowerCase()
console.log(snakeToKebab(kebabCase));
//task-12
function  changeFirstWord(word, firstLetter){
    let newWord = firstLetter + word.replace("K","")
    return newWord
}
console.log(changeFirstWord("Kamil", "R"));

//Task-13
function removeCharacterFromString(words){
    let firstWord = words.slice(1)
    return firstWord;
}
console.log(removeCharacterFromString("Loremn ipsum dolar sit amet"));

//Task-14
function checkIsEmail(email) {
    for (let indexs = 0; indexs < email.length; indexs++) {
        if (email[indexs] === "@") {
            return true;
        }
    }
    return false;
}
console.log(checkIsEmail("elmin@gmail.com"));
console.log(checkIsEmail("elmin.com"));


  

