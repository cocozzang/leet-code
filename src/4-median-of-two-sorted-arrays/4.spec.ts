import { findMedianSortedArrays } from "./4";

// TODO: 함수가 O(log(m+n))을 만족하는지 어떻게 검증할수 있을까?
describe("4번문제 test", () => {
  test("case1", () => {
    const nums1 = [1, 3];
    const nums2 = [2];

    expect(findMedianSortedArrays(nums1, nums2)).toBe(2);
  });

  test("case2", () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];

    expect(findMedianSortedArrays(nums1, nums2)).toBe(2.5);
  });
  test("case3", () => {
    const nums1 = [1, 4, 5];
    const nums2 = [6, 8];

    expect(findMedianSortedArrays(nums1, nums2)).toBe(5);
  });

  test("case4", () => {
    const nums1 = [23, 43, 54, 880, 925];
    const nums2 = [75, 99, 240, 293, 559, 844];

    expect(findMedianSortedArrays(nums1, nums2)).toBe(240);
  });
});
