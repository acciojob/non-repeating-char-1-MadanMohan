function firstNonRepeatedChar(str) {
  // Object to store character counts
  const counts = {};

  // First pass: count each character
  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  // Second pass: find first char with count 1
  for (let char of str) {
    if (counts[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating char found
}


const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
