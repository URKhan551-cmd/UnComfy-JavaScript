function isPalindrome(word){
  
   let start = 0;
   let end = word.length - 1;

   while(start < end){
    if(word[start] !== word[end]){
      console.log("Not a Palindrome");
      return false;
    }
      start++;
      end--;
   }
   console.log("It is a Palindrome");
   return true;
};

isPalindrome("racecAr");



// You should define a function named findPalindromeBreaks that takes a words array as its argument.
// It should return an array of indices of words that are not palindromes. It should return an empty array if the input is empty.

function findPalindromeBreaks(arr){
  if(arr.length === 0) return [];

let noPalindrome = [];
  for(let i=0; i<arr.length; i++){
    console.log(arr[i])
    let find = isPalindrome(arr[i]);   // call the first function to confirm that the word is palindrome or not.
    console.log(find);
    if(!isPalindrome(arr[i])){
        noPalindrome.push(i);
    }
  };
  return noPalindrome;
  
};


// findRepeatedPhrases that takes a [words array] and a phraseLength 2 or 3 as arguments.
// * It return an [array] of all start indices where a sequence of phraseLength consecutive words appears more than 
// once in the [array] including the index of the first occurrence. 
//  * It should return an [empty array] if phraseLength >= words.length. 
//   Overlapping sequences should also be counted.



// MAP()
// FIND REPEATED PHARSES SAME AS LIKE SLIDING WINDOW CONCEPT WITH OPTIMIZE APPROACH 
function findRepeatedPhrases(words, phraseLength) {
    if (phraseLength >= words.length) return [];

    let map = new Map();

    for (let i = 0; i <= words.length - phraseLength; i++) {

        let key = words
            .slice(i, i + phraseLength)
            .join(",");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(i);
    }


    let result = [];

    for (let indices of map.values()) {
        if (indices.length > 1) {
            result.push(...indices);
        }
    }

    return result;
};

//  BRUTE FORCE APPROACH
function findRepeatedPhrases(words, phraseLength) {
    if (phraseLength >= words.length) return [];

    let map = new Map();

    // Step 1: create every phrase
    for (let i = 0; i <= words.length - phraseLength; i++) {

        let phrase = [];

        for (let j = 0; j < phraseLength; j++) {
            phrase.push(words[i + j]);
        }

        // Convert array into string key
        let key = phrase.join(",");


        // Step 2: store indices
        if (map.has(key)) {
            map.get(key).push(i);
        } 
        else {
            map.set(key, [i]);
        }
    }


    // Step 3: collect repeated indices
    let result = [];

    for (let indices of map.values()) {

        if (indices.length > 1) {
            result.push(...indices);
        }

    }

    return result;
}


console.log(
    findRepeatedPhrases(
        ["a","b","c","a","b","c"],
        3
    )
);


  // 
function analyzeTexts(texts, phraseLength){
  if(texts.length === 0){
    return [];
  };

  let result = [];

  for(let text of texts){
    let repeated = findRepeatedPhrases(text, phraseLength);
    let breaks = findPalindromeBreaks(text);
    result.push({
      repeatedPhrases: repeated,
      palindromeBreaks: breaks 
    })
  }
  return result;
};
const texts = [
    ["level", "hello", "level", "hello"],
    ["madam", "racecar", "apple"]
];
console.log(analyzeTexts(texts, 2));
