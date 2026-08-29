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

// But there is another way: the mighty try…catch statement! If you want to handle the error directly inside the async function, 
// you can use try...catch with async/await syntax. If JavaScript throws an error in the try block, 
// the catch block code will run instead (this can also be used for synchronous code).

asyncFunctionCall().catch(err => {
  console.error(err)
});

async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}

<script>
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch(function (error) {
      console.error(error);
    });
</script>


// handle with help of async
  
<script>
  const img = document.querySelector('img');

  async function getCats() {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats')
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        img.src = response.data.images.original.url;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
</script>


  // Now that we have a function that is asynchronous, we can then start refactoring from using promises to using await:

<script>
  const img = document.querySelector('img');

  async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats');
    response.json().then(function(response) {
      img.src = response.data.images.original.url;
    }).catch(function(error) {
      console.error(error);
    });
  }
</script>

