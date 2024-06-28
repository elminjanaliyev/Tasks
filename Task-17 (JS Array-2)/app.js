//Task-1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let maxNubers = Math.max(...numbers)
console.log(`Ən böyük rəqəm: ${maxNubers}`);

//Task-2
let employees = [
    ["Jaylee Macy", "marketing"],
    ["John Smith", "management"],
    ["Blossom Hartley", "design"],
    ["Austin Carpenter", "marketing"],
    ["Joan Knowles", "development"],
    ["Sally Nunez", "management"],
    ["Laurel Ward", "development"],
    ["Lark Simon", "marketing"],
    ["Jane Stone", "management"],
    ["Courtney Olson", "development"],
  ];
let development = employees.filter((element) =>{
    return element[1] === "development"
})
console.log(development);

//Task-3
let array = [
    1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,
  ];
function sortArray(params) {
    let arrys = array.sort((a, b) => a - b)
    return arrys
}
console.log(sortArray());

//Task-4
function menfiEdedler(numBer) {
    let a = numBer.filter((num)=> {
        return num < 0;
    });
    return a;
}
let numbers1 = [3, -2, 4, -1]
let numbers2 =[3, 2, 4, 1]
console.log(menfiEdedler(numbers1));
console.log(menfiEdedler(numbers2));

//Task-6
function kebabToUpper(kebabUpper = "first-user") {
    let uperCase = kebabUpper.toUpperCase().replace("-", "_")
    return uperCase ; 
}
console.log(kebabToUpper());

//Task-7
let number = [1, 5, -7, 3, -9, 4, -6, 2];
let newNumber = []
number.forEach((num) =>{
    if (num < 0) {
        newNumber.push(Math.abs(num))
    }else{
        newNumber.push(num * 2)
    }
})
console.log(number);
console.log(newNumber);

//Task-8
let namesArray = [
    "Alice",
    "Bob",
    "Catherine",
    "David",
    "Eva",
    "Andrew",
    "Frank",
    "Anna",
    "George",
    "Alex",
  ];

let userName = namesArray.filter((name) =>{
    let filterName = name.startsWith("A")
 return filterName
})
if (userName.length === 0) {
    console.log("A - hərfi ilə başlayan ad yoxdur");
}else{
    console.log(userName);
}

//Task-9
function addTax(edv) {
    let edvDeyer = 0.25
    let newArray = edv.map(a =>{
     let newArrays = a += (edvDeyer)
     return newArrays
    })
    return newArray
}
let edvNumber = [12.99, 24.95, 9.99, 34.50, 19.99, 42.75, 8.49, 15.00, 28.75, 10.99];
console.log(addTax(edvNumber));
