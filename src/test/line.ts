export class Line implements ILines {
  public constructor(
    private readonly cells: string[][],
    private readonly columnMapping: Dictionary<number>,
  ) {}

  public line = (row: number): ILine => {
    return {
      cell: (columnName: string): string =>
        this.cells[row][this.columnMapping[columnName]],
    };
  };
}
