export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return nums.map((num) => num * num);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  const capitalize = words.map((word, i) => {
    if (i === 0) return word;
    else if (i > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });

  return capitalize.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let totalSubjects = 0;
  for (let i = 0; i < people.length; i++) {
    totalSubjects += people[i].subjects.length;
  }
  return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) return true;
  }

  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
