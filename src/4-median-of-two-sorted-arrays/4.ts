// 아래영상의 설명부분 다시보기
// https://www.youtube.com/watch?v=q6IEA26hvXc

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number | undefined {
  // 길이가 작은 배열을 nums1로 보장하기 위해 배열을 교환
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let m = nums1.length;
  let n = nums2.length;

  let left = 0;
  let right = m;

  while (left <= right) {
    // nums1 의 포인터 범위내의 중앙값
    let partitionX = Math.floor((left + right) / 2);

    // nums2 의 포인터 범위내의 중앙값
    let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    // 경계값 설정
    let minX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    let maxX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];

    let minY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    let maxY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

    // 조건 만족시
    if (minX <= maxY && minY <= maxX) {
      // 전체 길이가 짝수인 경우
      if ((m + n) % 2 === 0) {
        return (Math.max(minX, minY) + Math.min(maxX, maxY)) / 2;
      }

      // 전체 길이가 홀수인 경우
      return Math.max(minX, minY);
    }

    // num1의 포인터 범위내의 min value가 num2의 max value보다 크다면, 포인터의 오른쪽범위를 줄이기
    if (minX > maxY) {
      right = partitionX - 1;
    } else {
      left = partitionX + 1;
    }
  }
}
//                 x  y
// [1,5,7,8,10,11,11,23,44,46,97,108,194,283]
// 전체길이는 14
// (11+23)/2 = 17
const res = findMedianSortedArrays(
  [8, 10, 11, 23, 46, 108],
  [1, 5, 7, 11, 44, 97, 194, 283],
);

console.log(res);
