// in js we can create objects by help of constructor, operator like "new" new Function 
// here is the more advance "class" construct with a great new features in OOP
// 
// Basic Syntax of class 
class MyClass(){
    constructor(){....}
    method1(){}
    method2(){}
    method3(){}
}
// Then use new MyClass() to create a new object with all the listed methods.

// const school = new MyClass();
// here new keyword will call the constructor automatically

// The constructor() method is called automatically by new, so we can initialize the object there.

class User(){
    // call by new 
    constructor(name){
        this.name = name;
    }
    sayHi(){
        alert(this.name);
        // console.log(this.name)
    }
}
const user1 = new User("Khan"); // here new will cal constructor to create an object with property name
user.sayHi();  // khan
When new User("John") is called:

// A new object is created.
// The constructor runs with the given argument and assigns it to this.name.
// …Then we can call object methods, such as user.sayHi().

// if we check the same class what it is actually 
alert(typeof User) // function 

// class will
// Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
// Stores class methods, such as sayHi, in User.prototype.

// whenever we try to call a method with newly created user1 object it will get this method from User.prototype/
// so newly created objct has an acess to class methid through prototype.
class School(){
    constructor(name){
        this.name = name;
    }

    sayHi(){
        alert(this.name, "class 1st student")
    }
}
alert(typeof User) // function
alert(User === User.prototype.constructor) // true 
// the methods are in User.prototype
alert(User.prototype.sayHi) // true yes those are inside of the // User.proto

// here are two method to get the property holds by that User 
alert(Object.getOwnPropertyNames(User.prototype))   // it has constructor and sayHi  both method

// Not just a syntactic sugar
// Sometimes people say that class is a “syntactic sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new);
// we can craete the same thing by other ways also 

// rewriting class User in pure functions
function User(name){
    this.name = name;
}  // this is the constructor (we can call by "new")
// it has prototype holds constructor. same as like class.

// for class we create inside of it // here it comes by defULT WITH FUNCTION

// now add method to its User.prototype
User.prototype.sayHi = function(){
    alert(this.name)
}//  now this method goes into prototype of User   now object has been creating by User should be acessible to sayHi.

// usage:
const user2 = new User("khannn");
user2.sayHi(); 

// indeed reasons why class can be considered a syntactic sugar to define a constructor together with its prototype methods.
//  when a function comes from class it has some internal property
// called  [[IsClassConstructor]]: true ;   
// which will not come with normal function call
User(); // Error: Class constructor User cannot be invoked without 'new'

// Class methods are non-enumerable (incalculable, unmeasurable). A class definition sets enumerable flag to "false" for all methods in the "prototype".

// That’s good, because if we for..in over an object, we usually don’t want its class methods.
class User1 {
  constructor(name, age, id) {
     this.name = name;  // emurable property
     this.age = age;    // emurable property
     this.id = id;     // emurable property
  }

  sayHi(){}  // non-enumerable
}


// class Expression
// how can we use classes
const User = class{
    sayHi(){
        alert("helloo")
    }
}// here we assign class to variable.

// If a class expression has a name, it’s visible inside the class only:
// NAMED CLASS EXPRESSION:
const User3  = class MyClass{
    sayHi(){
        alert(MyClass);// MyClass name is just visible inide of class
    }
};
new User().sayHi();  // works show MyClass definition;
alert(MyClass)  // error direct we cant access.


// here we will return class from a function
function newUser(phrase){

    return class {
        sayHi(phrase){
            alert(phrase)
        }
    }
};
 const User4 = newUser("holaa"); // this will retrnn a class assign to user4.
new User4().sayHi(); // hola