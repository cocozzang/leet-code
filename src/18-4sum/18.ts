export const fourSum = (nums: number[], target: number): number[][] => {
  nums.sort((a, b) => a - b);

  const res: number[][] = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j - i > 1 && nums[j] === nums[j - 1]) continue;

      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];

        if (sum < target) {
          k++;

          while (nums[k] === nums[k - 1]) {
            k++;
          }
        } else if (sum > target) {
          l--;

          while (nums[l] === nums[l + 1]) {
            l--;
          }
        } else {
          res.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;

          while (nums[k] === nums[k - 1]) {
            k++;
          }

          while (nums[l] === nums[l + 1]) {
            l--;
          }
        }
      }
    }
  }

  return res;
};
