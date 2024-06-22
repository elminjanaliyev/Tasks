//Task-1
function User(fullName){
    this.fullName = fullName;
    this.creditLimit = 1000;
    this.balans = 30;
    this.precentOfMinPayment = 10;
    this.getBalance = function(){
        if (this.balans === 0 && this.creditLimit < 1000) {
            console.log(
                `sizin borcunuz: ${
                    1000 - 
                    this.creditLimit + 
                    (1000 - this.creditLimit) * (this.precentOfMinPayment /100)
                }`
            );
        }else if (this.balans > 0) {
            console.log(`sizin balansiniz: ${this.balans}`);
        }else{
            console.log("sizin borcunuz yoxdur");
        }
    }
  this.withdraw = function (amount) {
    if (amount > this.balans) {
        const dif = amount - this.balans
        this.balans = 0
        this.creditLimit -= dif
    }else{
        this.balans -= amount
    }
  }
}
const client = new User("Elmin Caneliyev")
client.getBalance()
client.withdraw(20)
console.log(client);

//Task-2

function Calcuator(){
    this.deyer = 0

this.toplama = function(a,b){
    this.deyer = a + b
    return this.deyer
}
this.cixma = function(a,b){
    this.deyer = a - b
    return this.deyer
}
this.vurma = function(a,b){
    this.deyer = a * b
    return this.deyer
}
this.bolme = function (a,b){
    this.deyer = a / b
    return this.deyer
}

this.yaddasdaSaxlama = function(yaddas){
    this.deyer = yaddas
}
this.memory = function(){
    return this.deyer
}
}
let calcshow = Calcuator()
console.log(`cixma ${cixma(12,9)}`);
console.log(`toplama ${toplama(12,8)}`);
console.log(`vurma ${vurma(8,3)}`);
console.log(`bolme ${bolme(9,3)}`);
yaddasdaSaxlama(10)
console.log(`yaddasda saxlama ${memory()}`);
