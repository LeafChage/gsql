export class GSQLError extends Error {
  public constructor(private readonly msg: string, private readonly e?: Error) {
    super(msg);
  }

  public static NotFoundDatabase = () => new GSQLError('Not found SpreadSheet');

  public static NotFoundTable = (tableName: string) =>
    new GSQLError(`Not found Table(${tableName})`);

  public static SyntaxError = (reason: string) =>
    new GSQLError(`SyntaxError: ${reason}`);

  public static Unimplement = () => new GSQLError('Sorry, unimplemented.');

  public static Unexpected = () => new GSQLError('?');

  public toString = (): string => `GSQLError: ${this.msg}. ${this.e?.message}`;
}
