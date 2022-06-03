import { GSQLError } from '../error'

const query = (table: TableName, columns: ColumnName[], values: string[][]): InsertCmd => {
  return {
    cmd: "INSERT",
    into: table,
    columns,
    values,
  }
};

const values = (tableName: TableName, columns: ColumnName[]) =>
  (values: string[][]) => {
    if (
      values.map(v => v.length)
        .filter(v => v != columns.length)
        .length > 0
    ) {
      throw GSQLError.SyntaxError("カラムとデータ量が一致していません");
    }
    return { query: query(tableName, columns, values) }
  }

const value = (tableName: TableName, columns: ColumnName[]) =>
  (value: string[]) => {
    if (value.length !== columns.length) {
      throw GSQLError.SyntaxError("カラムとデータ量が一致していません");
    }
    return { query: query(tableName, columns, [value]) }
  };

const columns = (tableName: TableName) =>
  (...columns: ColumnName[]) => ({
    values: values(tableName, columns),
    value: value(tableName, columns)
  })

const table = () =>
  (table: TableName) => ({ columns: columns(table) })

export const ginsert = () => ({
  into: table()
});

