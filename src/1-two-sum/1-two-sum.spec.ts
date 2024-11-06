import { twoSum, twoSum2 } from "./1-two-sum";

describe("1 two sum , O(n^2) case test", () => {
  test("input [2,7,11,15], 9 | return [0,1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("input [3,2,4], 6 | return [1,2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("input [3,3], 6 | return [0,1]", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});

describe("1 two sum , O(n) case test", () => {
  test("input [2,7,11,15], 9 | return [0,1]", () => {
    expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("input [3,2,4], 6 | return [1,2]", () => {
    expect(twoSum2([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("input [3,3], 6 | return [0,1]", () => {
    expect(twoSum2([3, 3], 6)).toEqual([0, 1]);
  });
});
