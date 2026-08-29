// For example, the two code blocks below do the exact same thing. 
// They both get information from a server, process it, and return a promise.

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
