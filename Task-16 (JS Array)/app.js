//Task-1
let groupName = ["Murad", "Kamran", "Ayxan"]
groupName.push("Emin")
groupName.pop()
console.log(groupName);

//Task-2
let names = ["lorem", "ipsum", "dolor"]
names.splice(1,1, "Classified")
console.log(names);

//Task-3
let originalNumber =[1, 2, 3, 4, 5];
let newNumber = [...originalNumber];
let newNumber2 = [];
for (let i = 0; i < originalNumber.length; i++) {
  newNumber2.push(originalNumber[i] * 2);
}
console.log(`Rəqəmlər ikiqat artırılıb:`, newNumber2);

for (let i = 0; i < originalNumber.length; i++) {
  if (originalNumber[i] !== newNumber[i]) {
    console.log("Orginal massiv  dəyişib");
  }else{
    console.log("Orginal massiv dəyişməyib" );
  }
}
//Task-4
let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
for (let i = 0; i < arr.length; i++) {
    const arrNumber = i + 1; 
    const arrText = arr[i];
    console.log(`Episode ${arrNumber}: ${arrText}`);
}

//Task-5
let userNumber = prompt("Vergül ilə ayrılmış 5 ədəd daxil edin")
let userNumbers  = userNumber.replaceAll(",","")                          
let userMinNumber = userNumbers[0]
for (let index = 0; index < userNumbers.length; index++) {
    if (userNumbers[index] < userMinNumber) {
        userMinNumber = userNumbers[i]
    }
}
console.log([userMinNumber]);

//Task-6
let textNumber = ["32,31,34,36,31"]
let textNumber2 = textNumber.splice(",")
for (let i = 0; i < textNumber2.length; i++) {
    const a = textNumber2[i].replaceAll("," , ";")
    console.log(a); 
}