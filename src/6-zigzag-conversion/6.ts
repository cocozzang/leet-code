export function covert(s: string, numRows: number): string {
  if (numRows < 2) return s;

  const arr = new Array(numRows).fill("");
  const cycle = (numRows - 1) * 2;

  s.split("").map((value, index) => {
    const rest = index % cycle;

    const arrIndex = rest < numRows ? rest : cycle - rest;

    arr[arrIndex] += value;
  });

  return arr.join("");
}
