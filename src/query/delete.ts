const query = (tableName: TableName, clause: WhereClause): DeleteCmd => {
  return {
    cmd: 'DELETE',
    table: tableName,
    where: clause,
  };
};

const where = (tableName: TableName) => (clause: WhereClause) => ({
  query: query(tableName, clause),
});

const from = () => (tableName: TableName) => ({
  where: where(tableName),
});

export const del = () => ({
  from: from(),
});
