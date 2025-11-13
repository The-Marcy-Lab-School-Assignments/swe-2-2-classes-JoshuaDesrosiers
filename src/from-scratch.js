class Rectangle {
  constructor(length,width){
    this.length=length
    this.width=width
  }
  getPerimeter=()=>(this.length+this.width)*2
  isSquare=()=>this.length==this.width
  getArea=()=>this.length*this.width
}

class Vehicle {
  constructor(type,capacity,color='black'){
    this.capacity=capacity
    this.color=color
    this.type=type
    this.passengers=[]
  }
  paint(color){
    this.color=color
    return color
  }
  addPassenger=(person)=>{
    if(this.passengers.length==this.capacity){
      return -1
    }
    else{
      this.passengers.push(person)
      return this.passengers.length
    }
  }


}

class PasswordManager {
  #password
  constructor(pass){
    this.#password=pass

  }
  checkPassword = (attempt)=>attempt==this.#password
  setPassword(oldPassword, newPassword){
    const evaluate = this.checkPassword(oldPassword)
    if(evaluate)this.#password = newPassword
    return evaluate
  }

}

class TodoList {
#items=[]
 constructor(title){
this.title=title
this.#items=[]

}
addItem = (item)=> {this.#items.push(item); return this.#items.length}
getItems = (item)=>[...this.#items]
removeItem = (item)=>{
  let ToR = this.#items.includes(item)?item:null
  if (ToR) this.#items.splice(this.#items.indexOf(item),1)
  return ToR
}
}
class BankAccount {
  static #accounts =[]
  #balance=0
  constructor(first,last,init=0){
    this.#balance=init
    this.firstName=first
    this.lastName=last
    BankAccount.#accounts.push(this)
  }
  getBalance(){
    return this.#balance
  }
  showBalance(){
    return `Your balance is $${this.#balance.toFixed(2)}`
  }
  deposit(money){
    this.#balance+=money
    return `Your balance is $${this.#balance.toFixed(2)}`
  }
  withdraw(request){
    if(this.#balance<request){
      return 'You do not have enough funds.'
    }
    this.#balance-=request
    return this.showBalance()
  }
 static getTotalHoldings(){
    return BankAccount.#accounts.reduce((acc,val)=>acc+val.getBalance(),0)
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
