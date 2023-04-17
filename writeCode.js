// Function 1
const addToZero = (numbers) => {
    let result = false
    for (let i = 0; i < numbers.length; i++) {
      for (let j=1; j < numbers.length; j++){
        if (numbers[i] + numbers[j] === 0) {
          result = true
        } 
      }
    }
    return result
}

console.log(addToZero([2, 1, 1, 3]));

// O(n^2)
// Quadratic
  

// Function 2
const hasUniqueChars = (letters) => {
    let result = true
    for (let i = 0; i < letters.length; i++) {
      for (let j = i + 1; j < letters.length; j++) {
        if (letters[i] === letters[j]){
          result = false
        } 
      }
    }
    return result
}

console.log(hasUniqueChars("Toosday"));

// O(n^2)
// Quadratic


// Function 3
const isPangram = (phrase) => {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    phrase = phrase.toLowerCase()
    return alphabet.every(letter => phrase.includes(letter))
}

console.log(isPangram("I like cats, but not mice"));

// O(n)
// Linear


// Function 4
const findLongestWord = (words) => {
    let longest = words.reduce((c, d) => c.length < d.length ? d : c, "")
    return longest.length
}

console.log(findLongestWord(["hi","hello"]));

// O(n)
// Linear
