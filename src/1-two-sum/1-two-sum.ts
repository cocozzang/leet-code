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

twoSum([2, 7, 11, 15], 9);
twoSum2([2, 7, 11, 15], 9);

export { twoSum, twoSum2 };
