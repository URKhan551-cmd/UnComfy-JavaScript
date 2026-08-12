// SRP = one clear responsibility
// Loose coupling  components shouldn't know unnecessary implementation details

// Now the remaining SOLID principles give you additional ways to answer:

// "How should I structure my code so that it remains easy to change as the application grows?"


// S  Single Responsibility
// O  Open / Closed
// L  Liskov Substitution
// I  Interface Segregation
// D  Dependency Inversion

// You already know S, so let's deeply understand O > L > I > D.

// SRP encourages 
// User => user information

// Validator => validation

// Repository => persistence

// EmailService => email

// Now coupling decreases.

// TIGHTLY COUPLED
const user = {
    start(){
        document.querySelector("#game").textContent = "Game Started";
    }
};
// why our object or maybe its a function or inside that you are going to affect UI  bad design 


// LOOSE COUPLED
const game = {
    start(){
        return {     // return as an object 
            message: "Game Started"
        };
    }
};
const result = game.start();  // now the result has {message: "Game Started"}
// here we will create a func where we will pass this result as parameter to get affects the UI.


function checkout(cart) {

    // calculate total

    // validate card

    // charge Stripe

    // save order

    // send email

    // update DOM

    // send analytics

}   
//bad design if tommorow someone change a bit of code you should change wvery function inside of that chekout function.


function calculateTotal(cart) {
    // pricing responsibility
}
function processPayment(payment) {
    // payment responsibility
}
function createOrder(orderData) {
    // order responsibility
}
function sendConfirmationEmail(order){
    // email Responsibility
}

function checkout(cart, payment) {

    const total = calculateTotal(cart);

    processPayment(payment, total);

    const order = createOrder(cart, total);

    sendConfirmationEmail(order);

    return order;
}  // notice something SRP said each function sghould perform specififc task 
// it doesnot matter how i called inside a function but i defined it outside if i need to change
// each functionality for any of the function i dont need to look at each and every i know which one \
// i should modify without changes happen in others.

