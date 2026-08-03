// Losing this
// This is one of JavaScript's most famous problems.

class Button{
  constructor(value){
    this.value = value;
  }
    click(){

        console.log(this.value);

    }

};

// create 
let button = new Button("khan");
button.click(); // this will work because "this" here refer to the instance create by Button here the button obj.
(this === button);

setTimeout(button.click, 2000); // here after 2 second call the function but what is the func here click or button.click();
// conceptually javascript kept the button.click(); inside a variable.
let war = button.click();
war();  // undefined
// because .click() refers to button instnce of Button not the variable we kept the button inside of it.
// now the connection to the original object is lost this is called "Lost This"

// HOW TO FIX LOST THIS
// bind() a method which bind this to that func.

class Button1{
   click(){
     console.log(this);
   };
  constructor(){
    this.click() = this.click.bind(this);
  }
}
// bind() permanent fix this to the method to the current Object

// ARROW FUNCTIO THIS FIX
click = () => {
  console.log(this.value)
};
// Why does this work?
// Arrow functions do not create their own this.
// They capture the surrounding this at the moment they're created.

// People think this creates a prototype method.
// It does NOT.
// It behaves almost like this:
class Button{

    constructor(){

        this.click = () => {

             console.log(this.value);  // "What was this in the surrounding scope when I was created?"

                                         // This is called lexical this.

        };                            // The arrow function captures that surrounding this (the new button instance).

    };                              // 

}
// The field is initialized for each instance, so every object gets its own click function.


// after doing bind or Arrow function 
setTimeout(button.click, 2000); 


// The class field click = () => {...} is created on a per-object basis, 
  // there’s a separate function for each Button object, with this inside it referencing that object.
  // We can pass button.click around anywhere, and the value of this will always be correct.


Memory comparison   Prototype method
Button.prototype

click()

        ▲
        │
 ┌──────┴──────┐
 │             │
button1     button2

One shared function.

Memory efficient.

//
  
Arrow class field
button1
click → Arrow Function #1


button2
click → Arrow Function #2


button3
click → Arrow Function #3

// Every object gets a new function.  More memory usage.

// EXAMPLE :: Functional design to Class design 
// ****
function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();



// CLASS DESIGN 
class Clock {
  constructor({ template }) {

    this.template = template;
    this.timer = null;
  }
  render() {

    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  start() {
    this.render();

    this.timer = setInterval(
      () => this.render(),
      1000
    );
  }
  stop() {
    clearInterval(this.timer);
  }
}

let clock = new Clock({
  template: "h:m:s"
});
clock.start();
