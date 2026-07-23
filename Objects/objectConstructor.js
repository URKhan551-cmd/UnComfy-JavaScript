// Constructor function we will must call this wwith new keyword..


function Find(name, age){
  this.name = name;
  this.age = age;
}

const person = new Find("umair", 90);
console.log(person.age); // 90
console.log(person.name); // umair;

function Find2(name, age){
   this.name = name;
   this.age = age;
   this.sayName = function(){
    console.log(this.name);
   }
}
const khann = new Find2("khann", 90);
const wazir = new Find2("wazir", 90);

khann.sayName();  // "khann" i can access all the property that behold by Find2 Constructior
wazir.sayName(); // wazir.


// Safe Guarding the constructor  or we can say if without new keyword you wanna call the constructor cause error.

function player(name, age){
    if(!new.target){
        throw Error("must write new before Constructor");
    }
this.name = name;
this.age = age;
this.sayName = function (){
    console.log(this.name);
}

}





// how to connect few constructor along side each other 
function Hero(name, level){
    this.name = name;
    this.level = level
};
Hero.prototype.greet = function(){
    console.log(`welcome to the team ${this.name}`);

}


// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);  // by this call() we got connect warrior to Hero.

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Both new constructors now have the properties 
// of Hero and a few unqiue ones. We’ll add the attack() method to Warrior, 
// and the heal() method to Healer.


Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior("uzair", 7, "Sword");
const hero2 = new Healer("ghullu", 8, "medicine");

hero1.attack();// uzair attacks with Sword.
hero2.heal(); // ghuulu casta Medicine;
hero1.greet();// EEError uncaught 
// Prototype properties and methods are not automatically 
// linked when you use call() to chain constructors. 
// We will use Object.setPropertyOf() to link the properties in 
// the Hero constructor to the Warrior and Healer constructors, 
// making sure to put it before any additional methods.

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
hero1.greet(); // welcome to the team Uzair.
