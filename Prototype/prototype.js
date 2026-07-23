// JavaScript is a prototype-based language, 
// meaning object properties and methods can be shared through generalized 
// objects that have the ability to be cloned and extended. 
// This is known as prototypical inheritance and differs from class inheritance

let x = {};
let x = new Object();
// The double square brackets that enclose [[Prototype]] 
// signify that it is an internal property, and cannot be accessed directly in code.

// then how we can find it out the prototype..?
Object.getPrototypeOf(x);
// return The output will consist of several built-in properties and methods.
// Output
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …};
x.__proto__;
// The output will be the same as if you had used getPrototypeOf().

// At the end of the prototype chain is Object.prototype. 
// All objects inherit the properties and methods of Object. 
// Any attempt to search beyond the end of the chain results in null.

// In our example, x is an empty object that inherits from Object. 
// x can use any property or method that Object has, such as toString();
x.toString();
// Output
[object Object];

// This prototype chain is only one link long. x -> Object. 
// We know this, because if we try to chain two [[Prototype]] properties together, it will be null.

x.__proto__.__proto__;

// Output
null

let y = [];
// we could also write it as an array constructor, let y = new Array().

// If we take a look at the [[Prototype]] of the new y array, 
// we will see that it has more properties and methods than the x object. 
// It has inherited everything from Array.prototype.
y.__proto__;
[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, …];
// We can chain two prototypes together now, 
// since our prototype chain is longer in this case. It looks like y -> Array -> Object
y.__proto__.__proto__;
// Output
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …};

// This chain is now referring to Object.prototype. 
// We can test the internal [[Prototype]] against the prototype 
// property of the constructor function to see that they are referring to the same thing.

y.__proto__ === Array.prototype;            // true
y.__proto__.__proto__ === Object.prototype; // true

Array.prototype.isPrototypeOf(y);      // true
Object.prototype.isPrototypeOf(Array); // true

// To summarize, all JavaScript objects have a hidden, 
// internal [[Prototype]] property (which may be exposed through __proto__ in some browsers);


// The prototype
// in JS all objects can be linked to another object which is called their prototype. [[prototype]];
// If a property or method is not found on the object itself, JavaScript looks for it in the [[Prototype]]

// The [[Prototype]] is another object
// the original object inherit from and has access to all of its [[prototype]] properties and function(method);

// if i defined some functionin constructor which is the bluprint of instances that has been made by this constructir 
// has all the properties inside the constructor should be there in original object (instance of constructor);


function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name);
  };
}

console.log(theHobbit.info());// undefined
const player1 = new Player("umair", 56);
player1.sayName()// umair.   because its [[prototype]] has sayName method that why the original player1 object has acces to it.


// how do we found that the prototype belongs to which object or instances has value coming form.

Object.getPrototypeOf(player1) ===  Player.prototype; // true.   this tells us the Player has prototype  and the original Object player1 has the same prototype.
Object.getPrototypeOf(player2) === Player.prototype; //  it will also becomes true when we define or cretae player2 form Player.

// The [[Prototype]] is another object…
// The value of the Player.prototype contains an object.
// A reference to Player.prototype is stored in every instance of a Player object as its [[Prototype]].


// if we wanna set some properties into the Constructor or method to constructor.
// by help of this

Player.prototype.sayHello = function (){
  console.log("Iam a player");
}
// now this will make sayHello method to [[prototype]].
// now any player that are the instance of this Player constructor has to access sayHello.
player1.sayHello(); // wallahh;
const player2 = new Player("uzair", 99);
player2.sayHello(); // newly created object player2 has all access to properties and method defiend in Player contructor.


// PROTOTYPAL INHERITANCE
// especially if you have a lot of common properties and functions, 
// and a lot of created objects! Defining them on a centralized, 
// shared object which the objects have access to, thus saves memory.

// we can say that the player1 and player2 objects inherit from the 
// Player.prototype object, which allows them to access functions like .sayHello.


// {imagine there is an object who prototype has { valueOf } method };

Object.getPrototypeOf(Player.prototype) === Object.prototype; // true
// now imagine i have Player.prototype which is same as Object.prototype it means object has some values 
// which comes down to Player and Player transfer that method or properties to player1 amd player2.

player1.valueOf(); // this valueOf comes from Object.prototype because valueOf() method is 
// not defined in Player Constructor obiously it comes form or inherit from Object.


// imagine Object does not has valueOf() method then 
player1.valueOf(); // null.

// lets check we have this valueOf inside the Player
player1.hasOwnProperty("valueOf"); // false
Object.prototype.hasOwnProperty("valueOf") // true.
// we got confirmation we are getting valueOf from Object.prototype

Object.prototype.hasOwnProperty("hasOwnProperty"); // true

// Essentially, this is how JavaScript makes use of prototypes. 
// An object inherits from its [[Prototype]] object which in turn inherits from its own [[Prototype]]

// (Remember, only the name, marker and sayName properties are part of the Player objects.)


// Recommended method for inheritance.

function Person(name){
    this.name = name;
}
Person.prototype.sayName = function (){
    console.log(`hello I am ${this.name}`);
}

function Player(name, marker){
    this.name = name;
    this.marker = marker;

};
Player.prototype.getMarker = function(){
    console.log(`My marler is ${this.marker}`);
};

Object.getPrototypeOf(Player.prototype) // Object.prototype;

// now set prototype
Object.setPrototypeOf(Person.prototype, Player.prototype);  
// because of that they can now aces each other properties and method.

Object.getPrototypeOf(Player.prototype); // return Person.prototype

const player1 = new Player("khan", 88);
const player2 = new Player("bari", 55);

player1.sayName(); // Hello i am khan
player2.sayName(); // hello i am bari

player1.getMarker(); // hello my marker is 88
player2.getMarker(); // hello my marker is 55;

// you can find how Person constructor share prototype to Player constructor
// this is so called Prototypal inheritance

Player.prototype = Person.prototype;
// Both Player.prototype and Person.prototype become the exact same object in memory. 
// This means any changes made to Player.prototype will also affect Person.prototype



Object.getPrototypeOf() vs .prototype

// A common cause of confusion comes from dealing with the .prototype property of constructor functions.

// .prototype is a property of functions that determines what a new object instance’s [[Prototype]] 
// will be set to when the function is called with new. .prototype is not for accessing an object’s [[Prototype]] - 
// that’s what Object.getPrototypeOf() is for.

// another example

function Ameer(name){
    this.name = name;

};
Ameer.prototype.sayHello = function(){
    console.log(`heelo welcome to ameer ${this.name}`);
}

function Company(name, id){
     this.name = name;
     this.id = id;

};
// Company.prototype.interview = function(){
//     console.log(`we will call you ${this.name} holds ${this.id}`);
// };


function ThirdCompany(name){
 this.name = name;
 this.id = 6;
};

Ameer.prototype = Company.prototype;
ThirdCompany.prototype = Ameer.prototype; // here it means ThirdCompany.prototype is also same as like Company.prototype

ThirdCompany.prototype.sayHello = function(){
    console.log("HAHAHAHAHAHAHAAA")              // here we redefineed sayHello() which was a proto to Ammer remember. 
}                                               // now we have same prototype chain so i access the Ameer sayHello func inside the ThirdCompany
                                       // i did change inside of it i declare console.log("HAHAHA"); it wil change the main Ameer holds.
// create instance or copy let see what happen

const bahu = new ThirdCompany("bahu");
bahu.sayHello(); // ahhhaa "HAHAHAhAhHAHAHAAh" see the output is manupulated by ThirdCompany prototype chain access wise.

// if we didt change the sayHello inside of ThirdComapny it will log (welcome to Ameer bahu..);

// thats the power of prototype


