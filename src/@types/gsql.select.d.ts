interface SelectCmd {
  cmd: 'SELECT';
  column: ColumnName[];
  from: TableName;
  where: WhereClause;
}
