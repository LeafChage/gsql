import { GSQL } from './gsql';
import { XSpreadSheet } from './spreadsheet';

export class GSQLManager {
  public readonly database: GSQL;

  public constructor(spreadSheetId: string) {
    const spreadsheet = SpreadsheetApp.openById(spreadSheetId);
    const sheets = spreadsheet.getSheets();
    this.database = new GSQL(new XSpreadSheet(sheets));
  }
}
