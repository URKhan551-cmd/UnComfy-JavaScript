// majority we have 3 ilar of class.

class User {

    // 1. Constructor
    constructor(){}

    // 2. Methods
    sayHi(){}

    // 3. Class Fields
    name = "John"

}

Think of a class as a blueprint.
  // it will raete an object which has sayHi method and name prop.

  //Getter & Setter

  class User {
    constructor(name){
      this.name = name;
    }
  }

let user = new User("Umair");  // user = {name: "Umair"}     holds inside the user object.

user.name(""); // now we change the name inside of user object we or someone else can easily manipulate data of an object.
// I DONT WANT THIS TO BE HAPPENED.
// ***
// Instead of allowing direct access, you create a gatekeeper.
// outsideWorld  --- GateKEEPER getter/setter    --   _name

// here define setter 
// set function need value to be passed and validate that value before goes to change 
set name(value){
  if(value.length < 4){
    alert("its too short");
    return
  };
  this._name = value;
}

// this.name = value    cause infinite call over and over recurrsion cause.
// so this._name  is prefer to use.
// _ underscore is just a namibg comvention its shows "internal";

// GETTER   is also a function we canot direct access to name by call a function   
get name(){
  return name;
}
console.log(user.name)  // you can see name outpur but internally Javascript call " user.name()  ".
// behind the scenes (conceptually). The getter runs automatically.


// ****
// Why are getters and setters on the prototype?
class User{

    get name(){}

}

// javascript internally 
User.prototype.__defineGetter__("name", function(){
  // Every object shares the same getter.
// There's no need to copy it for every object
});


// ******
// COMPUTED METHOD NAME:
// like an object literals  we can use sayHi(){}  &  ["say" + "Hi"](){}   both are the same 
class User {
  ["say" + "Hi"](){
    
  }
};
// internally javascript ccreate   
User.prototype.sayHi

// Object literals 
let user = {
  ["say" + "Hi"](){}
};
// this becomes
sayHi;
// This is useful when the method name depends on a variable.


// CLASS fields
// Before ES2022, classes only had methods.
class User{
    constructor(name){
        this.name = name;
    }
}
// Every property had to be initialized inside the constructor.
// People found that repetitive.

class User{

    name = "John";
}
// Much shorter.

// name or fields are not goes to prototype 
// each has diffferent values like "Umair"   name ="hssjkb"  name="khan"  no need to kekep in prototype
// just methods can goes to prototype it can be access by any object. cretaed by this constructor.


