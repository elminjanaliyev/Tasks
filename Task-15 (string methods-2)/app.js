//Task-1
//bu tapşırqı tam anlamadim 
//Task-2
function firsts(text , text2) {
    return text.replace("", text2);
}
console.log(firsts("misal ", "abc "));

//Task-3
function getNumberFromString(metin) {
    let numStr = metin.replace(/\D/g, '');
    return numStr;
}
console.log(getNumberFromString("hell5o wor6ld")); 

//Task-4
function removeAll(str) {
    let deleted = str.replace(/!/g, '');
    let sonDeyer =   deleted += '!'
    return sonDeyer
}
console.log(removeAll("Hi!")); 
console.log(removeAll("Hi!!!")); 
console.log(removeAll("!Hi")); 
console.log(removeAll("!Hi!")); 
console.log(removeAll("Hi! Hi!")); 
console.log(removeAll("Hi")); 

//Task-5
function getNumberString(reqem) {
    let numSetir = reqem.replace(/\d/g, '');
    return numSetir;
}
console.log(getNumberString("This looks5 grea8t")); 

//Task-6
let reqemSayi = "2346"
if (reqemSayi.length % 2 === 0) {
    console.log(reqemSayi.length);
}else{
    console.log("setirin olcusu tam eded deyil");
}

//Task-7
let boyukHerf = "HELLO I AM DONALD"
let kicikHerf = boyukHerf
if (boyukHerf === kicikHerf.toUpperCase()) {
    console.log(true);
}else{
    console.log(false);
}
//Task-8
function myFunction(n, s) {
    let artan = "";
    for (let i = 0; i < n; i++) {
        artan += s;
    }
    return artan;
}
console.log(myFunction(3, "I"));        
console.log(myFunction(4, "Hello"));   
console.log(myFunction(2, "JS")); 

//Task-9
function backString(str) {
    let back = "";
    for (let i = str.length -1; i >= 0; i--) {
        back += str[i];
    }
    return back;
}
console.log(backString('salam'));


//Task-10
function spaceDelete(bosluq) {
    let bosluqSil = bosluq.replaceAll(" ","")
    return bosluqSil;
}
console.log(spaceDelete("Lorem ipsum"));


        //Task link- 2 
//Task-1
function endString(before , after) {
    if (before.endsWith(after)) {
        console.log(true);
    }else{
        console.log(false);
    }
}
endString("abc" , "bc")

//Task-2
function  smallText(a) {
    let b = a.toLowerCase()
    return b
}
console.log(smallText("CoDiNg"));

//Task-3
function combine(soz1, soz2, herf) {
    let one = soz1.indexOf(herf);
    let two = soz2.indexOf(herf);
    let first = soz1.slice(0, one + 1);
    let second = soz2.slice(two);
    let compoundWord = first + second;
    return compoundWord;
}

console.log(combine("hello", "word", "l"));

//Task-4
function fnn(a, b) {
    let result = "";
    for (let c of a) {
        if (!b.includes(c)) {
            result += c;
        }
    }
    for (let c of b) {
        if (!a.includes(c)) {
            result += c;
        }
    }
    return result;
}
console.log(fnn("xyab", "xzca")); 
console.log(fnn("abc", "def")); 

//Task-5
//Bu Tapşırqıda anlaya bilmedim

