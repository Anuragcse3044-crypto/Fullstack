function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word.toLowerCase() === reversedWord.toLowerCase();
}

const word = "racecar";

if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}