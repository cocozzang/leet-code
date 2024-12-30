export const generateParenthesis = (n: number): string[] => {
  if (n === 1) return ["()"];

  if (n === 2) return ["(())", "()()"];

  const res: string[] = [];

  const genCase = (open: number, close: number, reduce: string) => {
    if (open === 0 && close === 0) {
      res.push(reduce);
      return;
    }

    if (open < close) {
      genCase(open, close - 1, reduce + ")");
    }

    if (open > 0) {
      genCase(open - 1, close, reduce + "(");
    }
  };

  genCase(n, n, "");

  return res;
};
