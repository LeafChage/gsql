export class GSQLError extends Error {
  public constructor(private readonly msg: string, private readonly e?: Error) {
    super(msg);
  }

  public static NotFoundDatabase = () =>
    new GSQLError('SpreadSheetが見つかりません。');

  public static NotFoundTable = (tableName: string) =>
    new GSQLError(`Table(${tableName})が見つかりません。`);

  public static Unimplement = () => new GSQLError('まだ実装していません。');

  public static Unexpected = () => new GSQLError('?');

  public toString = (): string => `GSQLError: ${this.msg}. ${this.e?.message}`;
}
