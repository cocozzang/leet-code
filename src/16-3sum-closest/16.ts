export const threeSumClosest = (nums: number[], target: number): number => {
  let res: number = Number.POSITIVE_INFINITY;
  let gap_buf: number = Number.POSITIVE_INFINITY;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1; // left pointer
    let k = nums.length - 1; // right pointer

    while (j < k) {
      const threeSum = nums[i] + nums[j] + nums[k];

      if (threeSum === target) {
        res = threeSum;
        break;
      }

      if (Math.abs(nums[i] + nums[j] + nums[k] - target) < gap_buf) {
        res = threeSum;
        gap_buf = Math.abs(threeSum - target);
      }

      if (threeSum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return res;
};
