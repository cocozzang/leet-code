import { findMedianSortedArrays } from "./4";

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

  test("시간복잡도 O(log(m+n)) 검증", () => {
    // 실행시간 측정 함수
    const measureExecutionTime = (nums1: number[], nums2: number[]) => {
      const start = process.hrtime.bigint();
      findMedianSortedArrays(nums1, nums2);
      const end = process.hrtime.bigint();
      return Number(end - start) / 1_000_000; // ms로 변환
    };

    // 다양한 크기의 정렬된 배열 생성
    const generateSortedArray = (size: number) =>
      Array.from({ length: size }, (_, i) => i * 2);

    // 테스트할 배열 크기들 (첫 번째 배열은 항상 작게 유지)
    const sizes = [
      [100, 1000],
      [100, 2000],
      [100, 4000],
      [100, 8000],
      [100, 16000],
    ];
    const executionTimes: number[] = [];

    // 각 크기별 실행 시간 측정
    sizes.forEach(([size1, size2]) => {
      const nums1 = generateSortedArray(size1);
      const nums2 = generateSortedArray(size2);

      // 여러 번 실행하여 평균 시간 측정
      const trials = 10;
      let totalTime = 0;
      for (let i = 0; i < trials; i++) {
        totalTime += measureExecutionTime(nums1, nums2);
      }
      executionTimes.push(totalTime / trials);
    });

    // 로그 시간 복잡도 검증
    // 입력 크기가 2배가 될 때마다 실행 시간은 거의 일정하게 증가해야 함
    for (let i = 1; i < executionTimes.length; i++) {
      const timeRatio = executionTimes[i] / executionTimes[i - 1];
      // 로그 시간 복잡도에서는 입력이 2배가 되어도 실행 시간은
      // 이론적으로 1보다 약간 큰 상수배 정도만 증가해야 함
      expect(timeRatio).toBeLessThan(2);
    }

    // 결과
    console.log("Sizes:", sizes);
    console.log("Execution times (ms):", executionTimes);
  });
});
