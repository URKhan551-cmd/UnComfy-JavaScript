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

