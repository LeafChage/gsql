type TableName = string;

const query = (
  columns: ColumnName[],
  table: string | SelectCmd,
  clause: WhereClause,
): SelectCmd => {
  return {
    cmd: 'SELECT',
    column: columns,
    from: table,
    where: clause,
  };
};

const selectWhere =
  (columns: ColumnName[], table: TableName | SelectCmd) =>
  (clause: WhereClause) => ({ query: query(columns, table, clause) });

const selectFrom =
  (columns: ColumnName[]) => (table: TableName | SelectCmd) => ({
    where: selectWhere(columns, table),
  });

const selectColumn =
  () =>
  (...columns: ColumnName[]) => ({ from: selectFrom(columns) });

export const select = () => ({
  column: selectColumn(),
});
