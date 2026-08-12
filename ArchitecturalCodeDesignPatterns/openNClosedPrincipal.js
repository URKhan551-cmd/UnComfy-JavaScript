// Open/Closed Principle — OCP

// Software entities should be open for extension but closed for modification.
// When you add a new feature, try to add new code instead of constantly modifying old, working code.

// BAD EXAMPLE
function processPayment(type, amount) {

    if (type === "stripe") {
        ...                 // on first day of our program we add stripe
    }

    if (type === "paypal") {   // after a while we add some other payment methods  
        ...
    }

    if (type === "apple") {  // again 
        ...
    }

    if (type === "google") {   // again 
        ...
    }

    if (type === "bank") {
        ...
    }

}  // every new payment provide needed you to change the existing code

// thats the problem OCP addressed


// BETTER ARCHUTECTURE
const stripe = {
    pay(amount) {            // eachh payment provider has its own behaviour
        console.log(`Stripe charged ${amount}`);
    }
};


const paypal = {
    pay(amount) {
        console.log(`PayPal charged ${amount}`);
    }
};

function checkout(paymentProvider, amount) {
    paymentProvider.pay(amount);
};

// whatever behaviour of payment we provide doesnot affects others.


// If tomorrow we add const applePay = {
    pay(amount) {
        console.log(`Apple Pay charged ${amount}`);
    }
};

// You don't modify checkout().
// You simply extend the system.
checkout(applePay, 300);
// That's the heart of OCP.

// BAD

function notify(type, message) {

    if (type === "email") {
        // send email
    }

    if (type === "sms") {
        // send SMS
    }

    if (type === "push") {
        // send push notification
    }

}

// Every new notification type requires changing this function.

// BETTER 
const email = {
    send(message) {
        console.log("Email:", message);
    }
};

const sms = {
    send(message) {
        console.log("SMS:", message);
    }
};

const push = {
    send(message) {
        console.log("Push:", message);
    }
};

function notify(service, message) {
    service.send(message);     // whatever message you pass with service like email it will goes directly
};


// Design areas that are likely to change so that new variations 
// can be added without breaking stable code.