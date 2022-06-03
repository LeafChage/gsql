interface DeleteCmd {
  cmd: 'DELETE';
  table: TableName;
  where: WhereClause;
}
