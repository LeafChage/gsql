import { Line } from './line';

export class Table implements ITable {
  private cells: string[][];

  public constructor(cells: string[][]) {
    this.cells = cells;
  }

  public data = (): ILines => {
    return new Line(this.cells.slice(1), this.columns());
  };

  public count = (): number => {
    return this.cells.length - 1;
  };

  private columns = (): Dictionary<number> => {
    const columnLastIndex = this.cells[0].length;
    const mapping: Dictionary<number> = {};
    for (let i = 0; i < columnLastIndex; i++) {
      mapping[`${this.cells[0][i]}`] = i;
    }
    return mapping;
  };
}
