import { Database } from './database';

describe('spreadsheet', () => {
  const db = new Database({
    main: [
      ['main1', 'main2', 'main3', 'main4', 'ok'],
      ['11', '12', '13', '14', '1'],
      ['21', '22', '23', '24', '0'],
      ['31', '32', '33', '34', '0'],
      ['41', '42', '43', '44', '1'],
      ['51', '52', '53', '54', '1'],
      ['61', '62', '63', '64', '1'],
    ],
    sub: [
      ['sub1', 'sub2', 'sub3', 'sub4', 'ok'],
      ['011', '012', '013', '014', '1'],
      ['021', '022', '023', '024', '0'],
      ['031', '032', '033', '034', '0'],
      ['041', '042', '043', '044', '1'],
      ['051', '052', '053', '054', '1'],
      ['061', '062', '063', '064', '1'],
    ],
  });

  it('table.count', () => {
    const table = db.table('sub');
    expect(table.count()).toBe(6);
  });

  it('table.data.line.cell', () => {
    const table = db.table('sub');
    expect(table.data().line(0).cell('sub1')).toBe('011');
    expect(table.data().line(1).cell('sub3')).toBe('023');
    expect(table.data().line(2).cell('sub4')).toBe('034');
  });
});
