import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

xdescribe("sumMultiples", () => {
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

xdescribe("isValidDNA", () => {
  test("returns true when passed a string containing only C G T or A characters", () => {
    expect(isValidDNA("CGTA")).toBe(true);

    expect(isValidDNA("CTGTCCAGG")).toBe(true);
  });

  test("returns false when passed a string containing characters other than C G T or A", () => {
    expect(isValidDNA("CGTARHD")).toBe(false);

    expect(isValidDNA("JKLPN")).toBe(false);

    //space is a character other than C G T or A
    expect(isValidDNA("CTGT CCAGG")).toBe(false);

    expect(isValidDNA(" ")).toBe(false);

    expect(isValidDNA("CTGT!CCA?GG#")).toBe(false);
  });

  test("is case sensitive", () => {
    expect(isValidDNA("ctag")).toBe(false);

    expect(isValidDNA("CtGA")).toBe(false);
  });

  test("returns false if passed an empty string", () => {
    expect(isValidDNA("")).toBe(false);
  });
});

xdescribe("getComplementaryDNA", () => {
  test("returns a string of complementary base pairs when passed a valid DNA string", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");

    expect(getComplementaryDNA("ACTGCCGTTTACTTAG")).toBe("TGACGGCAAATGAATC");
  });

  test("returns null if passed an invalid DNA string", () => {
    expect(getComplementaryDNA("ACTGJ")).toBe(null);

    expect(getComplementaryDNA("CTGT CCAGG")).toBe(null);

    expect(getComplementaryDNA("CTGT!CCA?GG#")).toBe(null);

    expect(getComplementaryDNA(" ")).toBe(null);

    expect(getComplementaryDNA("")).toBe(null);

    expect(getComplementaryDNA("ctag")).toBe(null);
  });
});

describe("isItPrime", () => {
  test("returns true if passed a prime number", () => {
    expect(isItPrime(2)).toBe(true);

    expect(isItPrime(5)).toBe(true);

    expect(isItPrime(11)).toBe(true);
  });

  test("returns false if passed a non-prime number", () => {
    expect(isItPrime(6)).toBe(false);

    expect(isItPrime(12)).toBe(false);

    expect(isItPrime(68)).toBe(false);
  });

  test("works with big prime numbers", () => {
    expect(isItPrime(7919)).toBe(true);

    expect(isItPrime(27644437)).toBe(true);

    expect(isItPrime(2971215073)).toBe(true);
  });

  test("returns false if passed a fractional number expressed with decimal notation", () => {
    expect(isItPrime(5.7)).toBe(false);

    expect(isItPrime(5.01)).toBe(false);

    expect(isItPrime(5.000001)).toBe(false);
  });

  test("returns true if passed a whole prime number expressed with decimal notation", () => {
    expect(isItPrime(5.0)).toBe(true);
  });

  test("throw an error if passed a number as a string", () => {
    expect(() => {
      isItPrime("5");
    }).toThrow("n must be a number");
  });
});

describe("createMatrix", () => {});

describe("areWeCovered", () => {});
