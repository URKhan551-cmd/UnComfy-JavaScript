function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;           // this consider as private outside of the func we canot acces REASON SCOPE.
  const getReputation = () => reputation;        // system or user dont know what inside this func but this holds closure.
  const giveReputation = () => { reputation++; };   // we just icrement the value of private by Closure.

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();
josh.giveReputation();

// logs { discordName: "@josh", reputation: 3 }
console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
// console.log(reputation); // Error  Refrence Error.
