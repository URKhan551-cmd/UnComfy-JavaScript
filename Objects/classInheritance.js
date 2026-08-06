// class inheritance is a way of one class to extend another class.
// so we can create functionality on top of one another.

// EXTENDS Keyword:
class Animal{
  constructor(name){
    this.name = name;
    this.speed = 0;
  };
  run(speed){
    this.speed = speed;
    alert(`${this.name} is run with ${this.speed}`)
  };
  stop(){
    this.speed = 0;
    alert(`${this.name} still stand`);
  }
};

let animal = new Animal("Cheetah");
animal.run();  // run(40) or (20);
animal.stop();   // speed = 0;


// now we want to create a Rabbit class which has extends to Animal.

class Rabbit extends Animal {
  hide(){
    alert(`${this.name} is hide`);
  }
};

const rabbit = new Rabbit("whiteRabbit");    
rabbit.hide();  // access its own prototype.
rabbit.run(32);  // Animal class prototype.
rabbit.stop();  // it mean the rabit ahs an acces to all of its parents prototype that is the power of inheritamce clean code.

// Internally, extends keyword works using the good old prototype mechanics. 
// It sets Rabbit.prototype.[[Prototype]] to Animal.prototype. So, if a method is not found in Rabbit.prototype, 
// JavaScript takes it from Animal.prototype

// Any expression is allowed after extends
// Class syntax allows to specify not just a class, but any expression after extends.

// For instance, a function call that generates the parent class:

function f(phrase) {
  return class {               // this is called anonymous class expression
    sayHi() { alert(phrase); }
  };
}

class User extends f("Hello") {}    // const parent = f()  now that parent is class perfectly
  // here we didnot kept our f() in parent variable but still f() return classs that extends to USER
new User().sayHi(); // Hello
Here class User inherits from the result of f("Hello").

// That may be useful for advanced programming patterns when we use functions to generate classes 
//   depending on many conditions and can inherit from them.
  
// Now JavaScript actually sees

class User extends class {
    sayHi() {
        console.log("Hello");
    }
}

// which is perfectly valid.
const u = new User();
u.sayHi() // Hello

//////////////
function createAnimal(type) {

    if(type === "dog") {

        return class {

            sound() {
                console.log("Woof");
            }

        };

    }

    return class {

        sound() {
            console.log("Meow");
        }

    };
}

class Dog extends createAnimal("dog") {}

class Cat extends createAnimal("cat") {}

new Dog().sound();
new Cat().sound();

// ****************************

// here a function Logger return a class  which is extends to base "here base = Database class"
// the Logger return a class with save method and its extends functionality to Database class
function Logger(Base) {

    return class extends Base {

        save() {
            console.log("Saving...");
            super.save();         // this save() method belongs from DAtabase class first "Saving..." run then super.save() run .
        }

    };

}

class Database {

    save() {
        console.log("Data Saved");
    }

}

class User extends Logger(Database) {}         // here logger return class which holds database class prototype   as expression connect
                                        // User class now every class has an access to prototypr.
const u = new User();

u.save();

// *********
// OVERRIDING METHOD
// by default my Rabbit class can use Animal class functionality but if i write Rabbit class own method like 
class Rabbit {
  stop(){
    alert(`${this.name} i can hide but not stop on place`);  // now i have Rabbit its own method which is same as Animal stop() method
  }
};

// if i wanna still use Animal class stop()  then i can use "super" keyword with stop()  to acceess the Animal class Stop().

// Classes provide "super" keyword for that.

// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).

// ***************88888888888

class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
// Now Rabbit has the stop method that calls the parent super.stop() in the process.
