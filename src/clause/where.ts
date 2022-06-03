import { GSQLError } from '../error';

export const where = (line: ILine, c: WhereClause): boolean => {
  return pass(line, c);
};

const pass = (line: ILine, c: WhereClause): boolean => {
  switch (c.kind) {
    case 'In':
    case 'Equal':
    case 'LessThan':
    case 'LessThanOrEqual':
    case 'MoreThan':
    case 'MoreThanOrEqual':
    case 'Between':
      return compare(line.cell(c.column), c);
    case 'Not':
    case 'And':
    case 'Or':
      return condition(line, c);
    default:
      throw GSQLError.Unexpected();
  }
};

const condition = (line: ILine, c: Condition): boolean => {
  switch (c.kind) {
    case 'Not':
      return !pass(line, c);
    case 'And':
      return pass(line, c.a) && pass(line, c.b);
    case 'Or':
      return pass(line, c.a) || pass(line, c.b);
    default:
      throw GSQLError.Unexpected();
  }
};

const compare = (v: string, c: Comparison): boolean => {
  switch (c.kind) {
    case 'In':
      return inn(v, c);
    case 'Equal':
      return eq(v, c);
    case 'LessThan':
      return lessThan(v, c);
    case 'LessThanOrEqual':
      return lessThanOrEqual(v, c);
    case 'MoreThan':
      return moreThan(v, c);
    case 'MoreThanOrEqual':
      return moreThanOrEqual(v, c);
    case 'Between':
      return between(v, c);
    default:
      throw GSQLError.Unexpected();
  }
};

const inn = (v: string, c: In) => c.targets.includes(v);
const eq = (v: string, c: Eq) => c.target === v;
const lessThan = (v: string, c: LessThan) => v < c.target;
const lessThanOrEqual = (v: string, c: LessThanOrEqual) => v <= c.target;
const moreThan = (v: string, c: MoreThan) => v > c.target;
const moreThanOrEqual = (v: string, c: MoreThanOrEqual) => v >= c.target;
const between = (v: string, c: Between) => c.from < v && v < c.to;
