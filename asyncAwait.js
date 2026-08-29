// For example, the two code blocks below do the exact same thing. 
// They both get information from a server, process it, and return a promise.

// Explain how you declare an async function.
// Explain what the async keyword does.
// Explain what the await keyword does.
// Explain what an async function returns.
// Explain what happens when an error is thrown inside an async function.
// Explain how you can handle errors inside an async function.

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


