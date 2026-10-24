backend Engineering from first principal

// paramms.js is pure function no state easy to test

export function splitPath(path){
  // "/users/42/" -> ["users", "42"]
  // "/"   -> []

  //   const parts = path.split("/").filter(Boolean);
   // return parts;
  return path.split("/").filter(Boolean);
}

export function parseParams(routeParts, urlParts){
    if(routeParts.length !== urlParts.length) return null;

    const params = {};
    
    for(let i=0; i< routeParts.length; i++){
        const routePart = routeParts[i];
        const urlPart = urlParts[i];

        if(routePart.startsWith(":")){
            const name = routePart.slice(1);
            // "42" -> "42",  "hello%20world" -> "hello world"
            // Also protects against prototype pollution
            if(name === "__proto__" || name === "constructor") return null;

            params[name] = decodeURIComponent(urlPart);

        } else if (routePart !== urlPart){
            return null; //static segment mismatch
        }
    }
    return params;
}


// Let's understand the two operations separately.
// Step A — path.split("/")
// JavaScript's split() method divides a string wherever it finds the specified separator.
// "/users/42".split("/")
// Result:
// ["", "users", "42"]


// Why is the first element an empty string
// Because the path begins with /. JavaScript sees the separator at the beginning, so the text before that separator is empty.
// Now consider a trailing slash:
// "/users/42/".split("/")


// Result:
// ["", "users", "42", ""]


// There is an empty string at the beginning and another at the end.
// But for route matching, we usually don't need those empty elements. We care about the meaningful path segments.
// Step B — .filter(Boolean)
// This removes falsy values from the array.
// ["", "users", "42", ""].filter(Boolean)
// Result:
// ["users", "42"]
// An empty string ("") is falsy in JavaScript, so it gets removed.
// Boolean is being used as a callback function. For each array item, filter() checks its truthiness and retains items for which the result is true.
