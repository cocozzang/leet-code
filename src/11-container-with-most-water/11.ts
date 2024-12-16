export const maxArea = (height: number[]): number => {
  let maxValue = 0;

  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    maxValue = Math.max(maxValue, (j - i) * Math.min(height[i], height[j]));

    if (height[i] < height[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return maxValue;
};
