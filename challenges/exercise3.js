export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let lessThanOne = [];
  nums.forEach((num) => {
    if (num < 1) {
      lessThanOne.push(num);
    }
  });
  return lessThanOne;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let namesBeginningWith = [];
  names.forEach((name) => {
    if (name.charAt(0) === char) {
      namesBeginningWith.push(name);
    }
  });
  return namesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbs = [];
  words.forEach((word) => {
    if (word.startsWith("to ")) {
      verbs.push(word);
    }
  });
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i]?.data?.city?.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let squareRoots = [];
  for (let i = 0; i < nums.length; i++) {
    squareRoots.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)));
  }
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let relevantSentences = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      relevantSentences.push(sentences[i]);
    }
  }
  return relevantSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let longestSides = [];
  for (let i = 0; i < triangles.length; i++) {
    longestSides.push(Math.max(...triangles[i]));
  }
  return longestSides;
}
