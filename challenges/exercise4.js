export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const nIndex = nums.findIndex((num) => num === n);
  if (nIndex < 0) return null;
  if (nIndex === nums.length - 1) return null;
  return nums[nIndex + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const splitStr = str.split("");
  return {
    1: splitStr.filter((item) => item == 1).length,
    0: splitStr.filter((item) => item == 0).length,
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return Number(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  return arrs.flat().reduce((acc, currValue) => acc + currValue);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2) return arr;
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  return (
    Object.values(haystack).filter(
      (straw) =>
        typeof straw === "string" &&
        straw.toLowerCase().includes(searchTerm.toLowerCase())
    ).length > 0
  );
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
