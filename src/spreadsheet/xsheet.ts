import { XRange } from './xrange';

export class XSheet implements ITable {
  // APIにアクセスしないようにキャッシュ
  private readonly rowsCount: number;
  private readonly columns: Dictionary<number>;

  public constructor(
    private readonly sheet: GoogleAppsScript.Spreadsheet.Sheet,
  ) {
    this.rowsCount = this.rowsLast();
    this.columns = this.loadColumns();
  }

  public count = (): number => {
    return this.rowsCount;
  };

  public data = (): ILines => {
    const origin = [1, 2];
    const size = [this.columnsLast(), this.rowsLast()];

    return new XRange(
      this.sheet.getRange(origin[1], origin[0], size[1], size[0]).getValues(),
      this.columns,
    );
  };

  private loadColumns = (): Dictionary<number> => {
    const columnLastIndex = this.columnsLast();
    const mapping: Dictionary<number> = {};
    const columnRow = this.sheet.getRange(1, 1, 1, columnLastIndex).getValues();
    for (let i = 0; i <= columnLastIndex; i++) {
      // spreadSheetのIndexは1から始まるが
      // このタイミングで0から始まるように修正する。
      mapping[columnRow[0][i]] = i;
    }
    return mapping;
  };

  // 1, 1から下方向にデータが無くなるまで移動する
  private rowsLast = (): number =>
    this.sheet
      .getRange(1, 1)
      .getNextDataCell(SpreadsheetApp.Direction.DOWN)
      .getRow();

  // 1, 1から右方向にデータが無くなるまで移動する
  private columnsLast = (): number =>
    this.sheet
      .getRange(1, 1)
      .getNextDataCell(SpreadsheetApp.Direction.NEXT)
      .getColumn();
}
