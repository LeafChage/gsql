interface UpdateCmd {
  cmd: 'UPDATE';
  table: TableName;
  values: Dictionary<string>;
  where: WhereClause;
}
