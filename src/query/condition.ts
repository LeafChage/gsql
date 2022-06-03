export const inn = (column: ColumnName, targets: string[]): In => ({
  kind: 'In',
  column,
  targets,
});

export const eq = (column: ColumnName, target: string): Eq => ({
  kind: 'Equal',
  column,
  target,
});

export const lessThan = (column: ColumnName, target: string): LessThan => ({
  kind: 'LessThan',
  column,
  target,
});

export const lessThanOrEqual = (
  column: ColumnName,
  target: string,
): LessThanOrEqual => ({
  kind: 'LessThanOrEqual',
  column,
  target,
});

export const moreThan = (column: ColumnName, target: string): MoreThan => ({
  kind: 'MoreThan',
  column,
  target,
});

export const moreThanOrEqual = (
  column: ColumnName,
  target: string,
): MoreThanOrEqual => ({
  kind: 'MoreThanOrEqual',
  column,
  target,
});

export const between = (
  column: ColumnName,
  from: string,
  to: string,
): Between => ({
  kind: 'Between',
  column,
  from,
  to,
});

export const not = (condition: Condition): Not => ({
  kind: 'Not',
  condition,
});

export const and = (a: Condition, b: Condition): And => ({
  kind: 'And',
  a,
  b,
});

export const or = (a: Condition, b: Condition): Or => ({
  kind: 'Or',
  a,
  b,
});
