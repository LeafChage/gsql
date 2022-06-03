export const select = (line: ILine, columns: string[]): Dictionary<string> => {
  const d: Dictionary<string> = {};
  for (const column of columns) {
    d[column] = `${line.cell(column)}`;
  }
  return d;
};
