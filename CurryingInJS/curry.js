console.log("hii Currying");
console.log("start implementing curry for an interview")

// currying named after a mathemathician Haskel B.Curry
// concept from lambda calculus
// Currying takes a function that receive more than one parameter
// and breaks it into a series of unary function (one parameter) functions.

// therefore curryng function only takes one parameter at a time

const buildCar(material){
   return (material2){              // anonymous function return by buildCar
    return (material3){               // another anonymous func retirn by anonymous function
        return `${material}, ${material2}, ${material3}`;   
    }
   }
};

const myCar = buildCar("tires")("engine")("oil");
 // output tires, enigne, oil

 // lets refactor  this
 const buildCarArrowFunc = material => material2 => material3 => `${material}, ${material2}, ${material3}`;
 
 const buildByArrowFunc = buildCarArrowFunc("seats")("staringwheel")("lights");
 
 
 const multiply = (x, y) => x * y;   // this is an arrow function return x multiply y;
 console.log(multiply(2, 6)) // oupt 12

 // curry version
const curryMultiply = x => y => x * y;   // here x is a function return y as a function finally multiply
console.log(curryMultiply(2))  // output  y = x*y;  return y we need y parameter.
console.log(curryMultiply(2)(6));  // 12

// Partially applied function are common use of currying 
const timeTen = curryMultiply(10);
console.log(timeTen);   //  y = x*y    we neeed y to complete function curry

console.log(timeTen(5)); // 10 from first func  will here multiply with 5 = 50


// Another Example 
const updateElement = id => content => document.querySelector(`#${id}`).textContent = content;
const checkHeaderText = updateElement("header") // header is an element id we wanna grab.
checkHeaderText("kahn bhai");  // here we pass content into it whatever we want to textContent.

// Another common use of currying is function composition
// Alllows calling  small function in a specific order
const addCustomer = fn => (...args) => {
   console.log("Saving customer info...");
   return fn(...args);
};

const processOrder = fn => (...args) => {
   console.log(`Processing Order #${args[0]}`);
   return fn(...args);
}

let completeOrder = (...args) => {
   console.log(`Order #${[...args].toString()} completed`);
}

completeOrder = (processOrder(completeOrder));     // this will return func assign it to completeOrder var
console.log(completeOrder);

completeOrder = (addCustomer(completeOrder));
completeOrder("1000");


// same complete Order paths functions in a curry way
function addCustomer(...args){
   return function processOrder(...args){
      return function completeOrder(...args){
         // end
      }
   }
}



const curry = (fn) => {
   console.log(fn.length)  // 3
 return curried = (...args) => {
    console.log(fn.length); // 3    3    3
    console.log(args.length) // 1   2    3
    if(fn.length !== args.length){
       console.log(...args)  // 10     10 20     
       return curried.bind(null, ...args);  // bind create a new func
    }

    return fn(...args);
 }  
}


const total = (x, y, z) => x + y + z;     // here a total function gets 3 args and return addition of these

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));  // 60




