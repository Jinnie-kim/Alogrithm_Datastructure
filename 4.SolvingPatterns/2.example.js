// Write a function which takes in a string and returns counts of each character in the string.

charCount('aaaa'); // {a: 4}
charCount('hello'); // {h: 1, e: 1, l: 2, o: 1};

// "my phone number is 182763"
// "Hello hi"

charCount(''); // {}  or flase or undefine?

// passes an object or null or number?

// function charCount(str) {
//   const result = {};
//   const makeLowercaseStr = str.toLowerCase().trim();

//   for (let i = 0; i < makeLowercaseStr.length; i++) {
//     result[makeLowercaseStr[i]] ? result[makeLowercaseStr[i]]++ : (result[makeLowercaseStr[i]] = 1);
//   }

//   return result;
// }

function charCount(str) {
  // make object to return at end
  const result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      // if the char is a number/letter AND is a key in object, add one to count
      result[char]++;
    }
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }

  // if character is something else (space, period, etc.) don't do anything.
  // return object at end
  return result;
}

function charCountRefactor(str) {
  const obj = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (!(code > 47 && code < 57) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
    return false;
  }
  return true;
}
