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

<script>
  const img = document.querySelector('img');

  async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats');
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }
</script>


// now how to handle erro throuh try catch block implement here in the same func
<script>
  const img = document.querySelector('img');

  async function getCats() {
    try {
      const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats');
      const catData = await response.json();
      img.src = catData.data.images.original.url;
    } catch (error) {
      console.error(error);
    }
  }
  getCats();    // herre we did cal our func to start
</script>


// hereis some examples 

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}
// now how to use this function  
// In this code we have a function called doubleAfter2Seconds. 
// This function will take a number as input and will resolve two seconds later with the number doubled.

doubleAfter2Seconds(10).then((r) => {
  console.log(r);
});


let sum =   doubleAfter2Seconds(10)
          + doubleAfter2Seconds(20)
          + doubleAfter2Seconds(30);
console.log(sum);
// undefined
// The problem with the above code is it doesn’t actually wait for our promises to resolve before logging to the console.

// One possible solution is to set up a promise chain. 
// To do this we’ll create a new function called addPromise. 
// Our function will take an input value, and will return a Promise. Here’s what the boilerplate code looks like:

function addPromise(x){
  return new Promise(resolve => {
    // Code goes here...   
    // resolve()
  });
};




// In this example we should be returning x + 2*a + 2*b + 2*c. Here’s the code:

function addPromise(x){
  return new Promise(resolve => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
        })
      })
    })
  });
}
// Lets walk through
// First, we create our function addPromise. This function accepts one parameter.
// Next, we create our new Promise that we’ll be returning. Note that for the sake of simplicity, we’re not handling rejections/errors.
// Next we invoke doubleAfter2Seconds for the first time, passing in a value of 10. Two seconds later, the return value of 20 will be returned to the a variable.
// We invoke doubleAfter2Seconds again, this time passing in a value of 20. Two seconds later, the return value of 40 will be returned to the b variable.
// We invoke doubleAfter2Seconds one final time, this time passing in a value of 30. Two seconds later, the return value of 60 will be returned to the c variable.
// Finally, we resolve our Promise with the value of 10 + 20 + 40 + 60 or 130.

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

function addPromise(x){
  return new Promise(resolve => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
      	})
      })
    })
  });
}

addPromise(10).then((sum) => {
  console.log(sum);
});

