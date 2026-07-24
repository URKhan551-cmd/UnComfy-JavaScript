function createUser(name){
    return {
        name
    };
}

const user = createUser("Ali"); 
// facoryFunc has been returning an object and we will never call with new keyword.
// Looks pretty natural.
// You simply return an object.
// No hidden behavior.
// No magic.

// Everything happens in your code.
// Nothing happens behind the scenes.

// This is the MOST important sentence in that paragraph.
// Factory functions use closures.

function createUser(name){
    let score = 0;
    return {         // here object has return where function is present with score incrementation.
        increase(){
            score++;    // this score is not inside the increase() function but still has an acces becuase of
        }                // closures. keep score as hidden refrence.
    }
};

const user1 = createUser("Ali");
user1.increase(); 
console.log({user});

// Example 2:
// to keep a variable secret it easily implemnet by factory function
function createUser1(name){
    const password = "2345";
   return {
    name,
    login(){
        console.log(password);
    }
   }
};
const user2 = createUser("umair");
console.log(user2.name);
console.log(user2.password);   // error it will not show us this directly access X.
user2.login();


// Engineers LOVE this.
// Because internal implementation stays hidden.
// This is called encapsulation.


// in constructor by help of prototype we can access one connect function to constructor by hundreds of users.
// here things is different

// * in Factory func every return object has its own function.
// * if i have 100 users each object has its own func attached with it.

// Architecture Thinking
// A junior asks:
// "Which one is faster?"
// A senior asks:
// "Which one communicates intent better?"
// Sometimes maintainability matters more than tiny performance differences.
