import { GSQLError } from './error';
import { select, where } from './clause';

/*
 * SpreadSheetをDBの1Tableとして使用するためのもの
 * + DB用のSpreadSheetにシートが一枚
 * + 1列名がカラム名
 * であることが前提
 */
export class GSQL {
  readonly wildCard = '*';
  public constructor(private readonly sheet: IDatabase) {}

  public run = (query: Query): Dictionary<string>[] => {
    switch (query.cmd) {
      case 'CREATE':
        throw GSQLError.Unimplement();
      case 'DELETE':
        throw GSQLError.Unimplement();
      case 'DROP':
        throw GSQLError.Unimplement();
      case 'INSERT':
        throw GSQLError.Unimplement();
      case 'SELECT':
        return this.select(query);
      case 'UPDATE':
        throw GSQLError.Unimplement();
    }
  };

  private select = (query: SelectCmd): Dictionary<string>[] => {
    if (typeof query.from !== 'string') {
      throw GSQLError.Unimplement();
    }

    const table = this.from(query.from);
    const data = table.data();

    const results = [];

    for (let row = 0; row < table.count(); row++) {
      const line = data.line(row);
      if (where(line, query.where)) {
        results.push(select(line, query.column));
      }
    }
    return results;
  };

  private from = (tableName: string): ITable => {
    return this.sheet.table(tableName);
  };
}
