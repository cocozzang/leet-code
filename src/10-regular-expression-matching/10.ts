// https://www.youtube.com/watch?v=HAA8mgxlov8
export const isMatch = (s: string, p: string): boolean => {
  const m = s.length,
    n = p.length;

  const dp: boolean[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(false),
  );

  // 초기 조건: 빈 문자열과 빈 패턴은 매칭됨
  dp[0][0] = true;

  // 패턴 초기화 (0번째 문자열에 대해 '*' 처리)
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // DP 테이블 채우기
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
        // 기본 매칭 (문자나 '.' 처리)
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        // '*' 처리 (0번 반복하거나 1번 이상 반복)
        dp[i][j] =
          dp[i][j - 2] || // 0번 반복
          ((s[i - 1] === p[j - 2] || p[j - 2] === ".") && dp[i - 1][j]); // 1번 이상 반복
        // && dp[i -1][j] 부분이 필요 없어 보일수도 있지만 mississipi같은 case에서 필요하다
      }
    }
  }

  return dp[m][n];
};

console.log(isMatch("aab", "a*b"));
