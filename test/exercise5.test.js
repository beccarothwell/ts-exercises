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

xdescribe("isItPrime", () => {
  test("returns true if passed a prime number", () => {
    expect(isItPrime(2)).toBe(true);

    expect(isItPrime(5)).toBe(true);

    expect(isItPrime(11)).toBe(true);
  });

  test("returns false if passed a non-prime number", () => {
    expect(isItPrime(6)).toBe(false);

    expect(isItPrime(12)).toBe(false);

    expect(isItPrime(68)).toBe(false);

    expect(isItPrime(-5)).toBe(false);

    expect(isItPrime(1)).toBe(false);

    expect(isItPrime(0)).toBe(false);
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

  test("throw an error if passed anything other than a string", () => {
    expect(() => {
      isItPrime([5]);
    }).toThrow("n must be a number");

    expect(() => {
      isItPrime({ i: 5 });
    }).toThrow("n must be a number");
  });
});

xdescribe("createMatrix", () => {
  test("returns an array of n arrays, each filled with n items", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);

    expect(createMatrix(5, "bar")).toEqual([
      ["bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar"],
    ]);
  });
  test("works with a longer string as fill item", () => {
    expect(
      createMatrix(2, "The quick brown fox jumps over the lazy dog")
    ).toEqual([
      [
        "The quick brown fox jumps over the lazy dog",
        "The quick brown fox jumps over the lazy dog",
      ],
      [
        "The quick brown fox jumps over the lazy dog",
        "The quick brown fox jumps over the lazy dog",
      ],
    ]);
  });
  test("works with an array as fill item", () => {
    expect(createMatrix(2, ["foo", "bar"])).toEqual([
      [
        ["foo", "bar"],
        ["foo", "bar"],
      ],
      [
        ["foo", "bar"],
        ["foo", "bar"],
      ],
    ]);

    expect(
      createMatrix(2, [
        ["how", ["deep", ["does", ["the", ["rabbit", ["hole", ["go?"]]]]]]],
      ])
    ).toEqual([
      [
        [["how", ["deep", ["does", ["the", ["rabbit", ["hole", ["go?"]]]]]]]],
        [["how", ["deep", ["does", ["the", ["rabbit", ["hole", ["go?"]]]]]]]],
      ],
      [
        [["how", ["deep", ["does", ["the", ["rabbit", ["hole", ["go?"]]]]]]]],
        [["how", ["deep", ["does", ["the", ["rabbit", ["hole", ["go?"]]]]]]]],
      ],
    ]);
  });

  test("works with an object as fill item", () => {
    expect(createMatrix(6, { a: "foo", b: "bar" })).toEqual([
      [
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
      ],
      [
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
      ],
      [
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
      ],
      [
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
      ],
      [
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
      ],
      [
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
        { a: "foo", b: "bar" },
      ],
    ]);
  });
});

describe("areWeCovered", () => {
  test("returns true if there 3 or more staff scheduled for the given day", () => {
    const arr1 = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Jessica", rota: ["Friday", "Monday", "Tuesday"] },
    ];
    expect(areWeCovered(arr1, "Tuesday")).toBe(true);

    const arr2 = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      {
        name: "Pedro",
        rota: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
      },
      { name: "Jessica", rota: ["Friday", "Monday", "Tuesday"] },
    ];
    expect(areWeCovered(arr2, "Monday")).toBe(true);

    const arr3 = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      {
        name: "Pedro",
        rota: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
      },
      { name: "Jessica", rota: ["Friday", "Monday", "Tuesday"] },
      { name: "Geoffrey", rota: ["Monday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(arr3, "Monday")).toBe(true);
  });

  test("returns false if there are less than 3 staff scheduled for the given day", () => {
    const arr1 = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Wednesday"] },
      { name: "Jessica", rota: ["Friday", "Monday", "Tuesday"] },
    ];
    expect(areWeCovered(arr1, "Tuesday")).toBe(false);

    const arr2 = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      {
        name: "Pedro",
        rota: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
      },
      { name: "Jessica", rota: ["Friday", "Monday", "Tuesday"] },
      { name: "Geoffrey", rota: ["Monday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(arr2, "Friday")).toBe(false);
  });

  test("return false if there are no staff at all", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });
});
