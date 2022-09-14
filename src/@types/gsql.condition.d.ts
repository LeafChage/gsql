interface In {
  kind: 'In';
  column: ColumnName;
  targets: string[];
  normalize: boolean;
}

interface Eq {
  kind: 'Equal';
  column: ColumnName;
  target: string;
  normalize: boolean;
}

interface LessThan {
  kind: 'LessThan';
  column: ColumnName;
  target: string;
}

interface LessThanOrEqual {
  kind: 'LessThanOrEqual';
  column: ColumnName;
  target: string;
}

interface MoreThan {
  kind: 'MoreThan';
  column: ColumnName;
  target: string;
}

interface MoreThanOrEqual {
  kind: 'MoreThanOrEqual';
  column: ColumnName;
  target: string;
}

interface Between {
  kind: 'Between';
  column: ColumnName;
  from: string;
  to: string;
}

interface Not {
  kind: 'Not';
  condition: WhereClause;
}

interface And {
  kind: 'And';
  a: WhereClause;
  b: WhereClause;
}

interface Or {
  kind: 'Or';
  a: WhereClause;
  b: WhereClause;
}

type Comparison =
  | Eq
  | LessThan
  | LessThanOrEqual
  | MoreThan
  | MoreThanOrEqual
  | Between
  | In;
type Condition = Not | And | Or;
type WhereClause = Comparison | Condition;
