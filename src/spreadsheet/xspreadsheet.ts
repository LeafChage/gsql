import { XSheet } from './xsheet';
import { GSQLError } from '../error';

export class XSpreadSheet implements IDatabase {
  private sheets: Dictionary<GoogleAppsScript.Spreadsheet.Sheet>;

  public constructor(sheets: GoogleAppsScript.Spreadsheet.Sheet[]) {
    this.sheets = {};
    for (const sheet of sheets) {
      this.sheets[sheet.getName()] = sheet;
    }
  }

  public table = (tableName: string): ITable => {
    const sheet = this.sheets[tableName];
    if (!sheet) {
      throw GSQLError.NotFoundTable(tableName);
    }
    return new XSheet(sheet);
  };
}
