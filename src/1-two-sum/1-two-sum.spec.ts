// O(n^2)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  throw new Error("test fail");
}

// O(n)
function twoSum2(nums: number[], target: number): number[] {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const gap = target - nums[i];

    if (numMap.has(gap)) return [numMap.get(gap), i];

    numMap.set(nums[i], i);
  }

  throw new Error("test fail");
}

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
