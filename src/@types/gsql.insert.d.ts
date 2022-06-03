interface InsertCmd {
  cmd: 'INSERT';
  into: TableName;
  columns: ColumnName[];
  values: string[][];
}
