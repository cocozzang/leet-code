// O(M+N) case
export function findMedianSortedArraysOMN(nums1: number[], nums2: number[]) {
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  // 남은 요소들 처리
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  const totalLength = merged.length;

  // 중앙값 찾기
  if (totalLength % 2 === 0) {
    // 짝수 길이인 경우
    const mid = totalLength / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    // 홀수 길이인 경우
    return merged[Math.floor(totalLength / 2)];
  }
}
