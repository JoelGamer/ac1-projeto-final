export const calculateSpiral = (x: number, y: number) => {
  const matrix: string[][] = [];

  for (let i = 0; i < x; i++) {
    const row: string[] = [];
    for (let j = 0; j < y; j++) {
      row.push(`${i}-${j}`);
    }
    matrix.push(row);
  }

  const matrixSpiral = spiral<string>(matrix).reverse();
  matrixSpiral.pop();
  matrixSpiral.pop();

  return matrixSpiral;
};

const spiral = <T>(matrix: T[][]) => {
  const arr: T[] = [];
    
  while (matrix.length) {
    arr.push(
      ...matrix.shift() || [],
      ...matrix.map((a: any[]) => a.pop()),
      ...(matrix.pop() || []).reverse(),
      ...matrix.map((a: any[]) => a.shift()).reverse()
    );
  }

  return arr;
}