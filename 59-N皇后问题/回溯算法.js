/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型 the n
 * @return int整型
 */
function Nqueen(n) {
  // write code here
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill(".");
  }

  const cols = new Set(); //列集，记录出席那过皇后的列
  const diag1 = new Set(); //正对角线集
  const diag2 = new Set(); //反对角线集
  let res = 0;

  const helper = (row) => {
    if (row === n) {
      res++;
      return;
    }
    for (let col = 0; col < n; col++) {
      // 如果当前点的所在列，所在的对角线都没有皇后，即可选择，否则，跳过
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
        board[row][col] = "Q"; //放置皇后
        cols.add(col); //记录放了皇后的列
        diag1.add(row + col); //记录放了皇后的正对角线
        diag2.add(row - col); //记录放了皇后的负对角线
        helper(row + 1);
        board[row][col] = "."; //撤销该点的皇后
        cols.delete(col);
        diag1.delete(row + col);
        diag2.delete(row - col);
      }
    }
  };

  helper(0);
  return res;
}
module.exports = {
  Nqueen: Nqueen,
};
