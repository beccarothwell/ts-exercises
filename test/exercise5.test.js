import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("returns the the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 1, 3])).toBe(8);

    expect(sumMultiples([1, 5, 12, 100, 50, 22, 33, 3])).toBe(203);

    expect(sumMultiples([1, 5, 5, 5, 3, 3, 2])).toBe(21);
  });

  test("does not add strings of numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 5, 3, "50", "33", "22"])).toBe(8);
  });

  test("works with whole numbers expressed with decimal notation", () => {
    expect(sumMultiples([1, 5.0, 3.0, 10])).toBe(18);
  });

  test("does not count fractional numbers expressed with decimal notation", () => {
    expect(sumMultiples([1, 5.5, 3.33, 10, 5.0])).toBe(15);
  });

  test("returns 0 when passed an empty array", () => {
    expect(sumMultiples([])).toBe(0);
  });

  test("returns 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 7, 22, 31])).toBe(0);
  });
});

describe("isValidDNA", () => {});

describe("getComplementaryDNA", () => {});

describe("isItPrime", () => {});

describe("createMatrix", () => {});

describe("areWeCovered", () => {});
