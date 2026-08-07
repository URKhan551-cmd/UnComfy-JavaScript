import pypandoc

content = r"""# Text Analysis System

## Overview

This project is a JavaScript text analysis system built with reusable functions.

The system performs:

1. Palindrome checking
2. Finding words that are not palindromes
3. Detecting repeated consecutive word phrases
4. Combining all analysis into a final report

The design follows the principle of separation of concerns, where each function has one clear responsibility.

---

# System Architecture

---

# 1. isPalindrome(word)

## Purpose

Checks whether a single word is a palindrome.

Examples:
racecar -> true
level -> true
hello -> false


## Algorithm

Uses the Two Pointer technique:

- Start pointer begins from the first character.
- End pointer begins from the last character.
- Compare both characters.
- Move toward the center.

## Complexity

Time Complexity:
O(n)
---

# 2. findPalindromeBreaks(arr)

## Purpose

Finds indexes of words that are not palindromes.

Example:

Input:


[
"level",
"hello",
"madam",
"world"
]


Checking:


level -> palindrome
hello -> not palindrome
madam -> palindrome
world -> not palindrome


Output:


[1,3]
## Logic

For every word:

1. Call isPalindrome()
2. If it returns false, store the index.

Complexity:


O(n*k)


where:

- n = number of words
- k = average word length

---

# 3. findRepeatedPhrases(words, phraseLength)

## Purpose

Finds repeated sequences of consecutive words.

Uses:

- Sliding Window
- Hash Map

Example:

Input:


[
"a",
"b",
"c",
"a",
"b",
"c"
]

phraseLength = 3


Generated phrases:


0 -> a b c
1 -> b c a
2 -> c a b
3 -> a b c


Repeated phrase:


a b c

Result:


[0,3]


---

## Algorithm

### Step 1: Create sliding windows

Each possible phrase is generated.

Example:


[a,b,c]
[b,c,a]
[c,a,b]
[a,b,c]


### Step 2: Convert phrase into a Map key

JavaScript arrays are compared by reference.

Therefore:


["a","b","c"]


is converted into:


"a,b,c"


### Step 3: Store indexes

Example Map:


{
"a,b,c": [0,3],
"b,c,a": [1],
"c,a,b": [2]
}


Only phrases with multiple indexes are returned.

## Complexity

Time:


O(n*k)

Space:


O(n)


---

# 4. analyzeTexts(texts, phraseLength)

## Purpose

Main controller function.

It processes multiple texts and combines all results.

For each text:

1. Find repeated phrases.
2. Find palindrome breaks.
3. Create an object containing both results.

Example output:[
{
repeatedPhrases: [0,3],
palindromeBreaks: [1]
}
]


---

# Important Concepts Practiced

## Two Pointer Algorithm

Used in:


isPalindrome()


## Sliding Window

Used in:


findRepeatedPhrases()


## Hash Map Pattern

Used to store:


phrase -> indexes


## Function Composition

Used in:


analyzeTexts()


## Separation of Concerns

Each function performs one job:


isPalindrome
|
v
Checks one word

findPalindromeBreaks
|
v
Checks many words

findRepeatedPhrases
|
v
Finds duplicate sequences

analyzeTexts
|
v
Combines complete analysis
---

# Final Learning Summary

This project teaches important algorithm and software engineering patterns:

- Modular programming
- Reusable functions
- Two pointer algorithms
- Sliding window technique
- Hash maps
- Array manipulation
- Complexity analysis

These patterns are commonly used in production software and technical interviews.
"""

