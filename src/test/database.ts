import { Table } from './table';

export class Database implements IDatabase {
  public constructor(private readonly tables: Dictionary<string[][]>) {}

  public table = (tableName: string): ITable => {
    return new Table(this.tables[tableName]);
  };
}
