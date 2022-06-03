type Dictionary<T = string> = { [key: string]: T };

type TableName = string;
type ColumnName = string;

type Query = SelectCmd | UpdateCmd | InsertCmd | DeleteCmd;

type SQLResult = { [key: string]: string }[];

interface IDatabase {
  table: (tableName: string) => ITable;
}

interface ITable {
  data: () => ILines;
  count: () => number;
}

interface ILines {
  line: (row: number) => ILine;
}

interface ILine {
  cell: (columnName: string) => string;
}
