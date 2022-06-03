type TableName = string;
type ColumnName = string;

type Query = SelectCmd | UpdateCmd | InsertCmd | DeleteCmd;

type SQLResult = { [key: string]: string }[];

interface IDatabase {
  table: (tableName: string) => ITable;
}

interface ITable {
  data: () => ILines;
  rowsCount: () => number;
  columnsCount: () => number;
  insert: (columnValue: Dictionary<string>) => void;
}

interface ILines {
  line: (row: number) => ILine;
}

interface ILine {
  cell: (columnName: string) => ICell;
}

interface ICell {
  getValue: () => any;
}
