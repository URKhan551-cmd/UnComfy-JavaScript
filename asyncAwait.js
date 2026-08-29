// For example, the two code blocks below do the exact same thing. 
// They both get information from a server, process it, and return a promise.

// Explain how you declare an async function.
// Explain what the async keyword does.
// Explain what the await keyword does.
// Explain what an async function returns.
// Explain what happens when an error is thrown inside an async function.
// Explain how you can handle errors inside an async function.

// An important thing to understand is async functions are just syntactical sugar for promises.

const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

function getPersonsInfo(name) {
  return server.getPeople().then(people => {
    return people.find(person => { return person.name === name });
  });
}
async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => { return person.name === name });
  return person;
}

//
const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
}


anArray.forEach(async item => {
  // do something asynchronously for each item in 'anArray'
  // one could also use .map here to return an array of promises to use with 'Promise.all()'
});

server.getPeople().then(async people => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});

The await keyword
// await does the following: it tells JavaScript to wait for an asynchronous action to 
// finish before continuing the function. It’s like a ‘pause until done’ keyword. 
// The await keyword is used to get a value from a function where you would normally use .then(). 
// Instead of calling .then() after the asynchronous function, you would assign a variable to the result using await

