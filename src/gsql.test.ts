import { select, eq, inn } from './query';
import { GSQL } from './gsql';
import { Database } from './test';

const db = new GSQL(
  new Database({
    user: [
      ['id', 'first_name', 'last_name', 'email', 'gender'],
      ['1', 'Richie', 'Stave', 'rstave0@barnesandnoble.com', 'Male'],
      ['2', 'Jeremias', 'Foxhall', 'jfoxhall1@behance.net', 'Male'],
      ['3', 'Emmalynn', 'Sumpter', 'esumpter2@craigslist.org', 'Female'],
      ['4', 'Lilly', 'Wyett', 'lwyett3@fema.gov', 'Female'],
      ['5', 'Dwain', 'Chandlar', 'dchandlar4@army.mil', 'Male'],
    ],
    post: [
      ['id', 'post', 'user_id'],
      ['1', 'tortor quis turpis sed ante', '1'],
      ['2', 'odio cras mi pede malesuada', '3'],
      ['3', 'mi pede malesuada in imperdiet', '2'],
      ['4', 'amet erat nulla tempus vivamus', '3'],
      ['5', 'vulputate luctus cum sociis natoque', '4'],
      ['6', 'morbi ut odio cras mi', '2'],
      ['7', 'molestie hendrerit at vulputate vitae', '1'],
      ['8', 'pellentesque quisque porta volutpat erat', '3'],
      ['9', 'luctus ultricies eu nibh quisque', '2'],
      ['10', 'amet diam in magna bibendum', '5'],
      ['11', 'ipsum praesent blandit lacinia erat', '1'],
      ['12', 'donec vitae nisi nam ultrices', '3'],
      ['13', 'nulla dapibus dolor vel est', '1'],
      ['14', 'interdum in ante vestibulum ante', '5'],
      ['15', 'duis bibendum felis sed interdum', '1'],
      ['16', 'ut massa volutpat convallis morbi', '3'],
      ['17', 'consequat ut nulla sed accumsan', '3'],
      ['18', 'massa id lobortis convallis tortor', '1'],
      ['19', 'ultrices erat tortor sollicitudin mi', '5'],
      ['20', 'ligula in lacus curabitur at', '4'],
      ['21', 'dictumst morbi vestibulum velit id', '5'],
      ['22', 'cubilia curae duis faucibus accumsan', '2'],
      ['23', 'vivamus metus arcu adipiscing molestie', '4'],
      ['24', 'massa id lobortis convallis tortor', '4'],
      ['25', 'praesent blandit lacinia erat vestibulum', '5'],
      ['26', 'at ipsum ac tellus semper', '4'],
      ['27', 'volutpat convallis morbi odio odio', '3'],
      ['28', 'id lobortis convallis tortor risus', '5'],
      ['29', 'velit id pretium iaculis diam', '3'],
      ['30', 'parturient montes nascetur ridiculus mus', '3'],
    ],
  }),
);

test('select id, first_name, email from user where id = 2', () => {
  expect(
    db.run(
      select()
        .column('id', 'first_name', 'email')
        .from('user')
        .where(eq('id', '2')).query,
    ),
  ).toEqual([
    { id: '2', first_name: 'Jeremias', email: 'jfoxhall1@behance.net' },
  ]);
});

test('select id, first_name, email from user where id in (2, 3)', () => {
  expect(
    db.run(
      select()
        .column('id', 'first_name', 'email')
        .from('user')
        .where(inn('id', ['2', '3'])).query,
    ),
  ).toEqual([
    { id: '2', first_name: 'Jeremias', email: 'jfoxhall1@behance.net' },
    { id: '3', first_name: 'Emmalynn', email: 'esumpter2@craigslist.org' },
  ]);
});
