//Task-1
//Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (name, surname, gender, birthday). Konsola doğum tarixini çıxarın.
const user = {
   name: "Elmin",
   surname: "Caneliyev",
   gender: "Man",
   birthday: "14.08.2004"
}
console.log(user.birthday);

//Task-2
//Obyektə yaş (age) əlavə edin və doğum tarixini silin.İstifadəçi məlumatları olan bir obyekt verilib.
//Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.Alınmış obyekti konsola çıxarın.
const fullName = {
    name: "Elmin",
   surname: "Caneliyev",
   gender: "Man",
   birthday: "14.08.2004",
   age: 20
}
delete fullName.birthday
console.log(fullName);

//Task-3
//Object-i key: value olaraq consolda göstərin.
const userName = {
   name: "Rasim",
   surname: "Abbasov"
}

console.log(userName);

//Task-4
let user1 = {
   age: 30,
   pensionAge: 66,

   setAge(newAge) {
     this.age = newAge;
   },
 
   getYearsBeforeRetirement() {
     let yearWinner = this.pensionAge - this.age
     return yearWinner
   }
 };
 
 user1.setAge(42);
 console.log(`Yeni yaş: ${user1.age}`)
 
 let PensiyayaQeder = user1.getYearsBeforeRetirement()
 console.log(`Pensiyaya qədər qalan illər: ${PensiyayaQeder} `);

 //Task-5
 function prop2Taker(obj) {
   console.log(obj[`prop-2`]);
 }
 prop2Taker({ one: 1, 'prop-2': 2}) // 2

prop2Taker({ 'prop-2': 'two', prop: 'test'}) // 'two'

 //Task-6
 function propertyTaker(obj, propertyName) {
   console.log(obj[propertyName]);
 }
 (propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent')); 
 
 (propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country'));
 
 (propertyTaker({name:'ali', age:12}, 'name'));

//Task-7
function existsAndTruthy(obj , propertyName) {
   if (obj[propertyName]) {
      console.log(true);
   } else {
      console.log(false);
   }
}
existsAndTruthy({a:1,b:2,c:3},'b') // true

existsAndTruthy({x:'a',y:null,z:'c'},'y') 
// false (obyektde 'y' var amma falsy-di ona gore false)

existsAndTruthy({x:'a',b:'b',z:undefined},'z')
 // false (obyektde 'z' yoxdu ona gore false)