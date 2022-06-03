const query = (
  tableName: TableName,
  values: Dictionary<string>,
  clause: WhereClause,
): UpdateCmd => {
  return {
    cmd: "UPDATE",
    table: tableName,
    values,
    where: clause,
  }
}

const where = (tableName: TableName, values: Dictionary<string>) =>
  (clause: WhereClause) => ({ query: query(tableName, values, clause), })

const set = (tableName: TableName) =>
  (values: Dictionary<string>) => ({
    where: where(tableName, values),
  })

const table = () => (tableName: TableName) => ({
  set: set(tableName),
});

export const update = () => ({
  table: table(),
});
