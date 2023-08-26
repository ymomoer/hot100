function LCS(s1, s2) {
  // write code here
  if (s1.length === 0 || s2.length === 0) {
    return -1;
  }
  const len1 = s1.length;
  const len2 = s2.length;

  const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1.chartAt(i - 1) === s2.chartAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = len1;
  let j = len2;
  const stack = [];

  while (dp[i][j] !== 0) {
    if (dp[i][j] === dp[i - 1][j]) {
      i--;
    } else if (dp[i][j] === dp[i][j - 1]) {
      j--;
    } else if (dp[i][j] > dp[i - 1][j - 1]) {
      i--;
      j--;
      stack.push(s1.chartAt(i));
    }
  }

  let res = "";

  while (stack.length > 0) {
    res += stack.pop();
  }

  return res !== "" ? res : "-1";
}
