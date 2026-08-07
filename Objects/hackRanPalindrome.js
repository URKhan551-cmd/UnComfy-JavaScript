// Check Palindrome by Filtering Non-Letters
// Given a string containing letters, digits, and symbols, 
// determine if it reads the same forwards and backwards when considering only alphabetic characters (case-insensitive).
 
 // * The function is expected to return a BOOLEAN.
 // * The function accepts STRING code as parameter.
 // */

function isAlphabeticPalindrome(code) {
    // Write your code here
    function isLetter(char){
        return (
                (char >= "a" && char <= "z") || (char >= "A" && char <= "Z")     // here i check each char when i put into comparison is
        )                                                                      // it char or any number or any special char should be skip.
        
    };
    let word = code.toLowerCase();
    let start = 0;
    let end = word.length - 1;
    while(start < end ){
        
        while(start < end && !isLetter(word[start])){
                start++;
        }
        while(start < end && !isLetter(word[end])){
                end--;
        }
        if(word[start] !== word[end]){
                return false;
        }else {
                start++;
                end--;
        }
    }
return true;
}


