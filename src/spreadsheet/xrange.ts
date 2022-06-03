export class XRange implements ILines {
  public constructor(
    private readonly values: any[][],
    private readonly columnMapping: Dictionary<number>,
  ) {}

  public line = (row: number): ILine => {
    const line = this.values[row];
    return {
      cell: (columnName: string) => line[this.columnMapping[columnName]],
    };
  };
}
