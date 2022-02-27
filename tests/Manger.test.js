const Manager = require('../lib/Manager')

test('check if manger email = email for manger' , () => {
  let email='Shyla@shyla.com'

  let Man = new Manager ('shyla',1000000000,email)
  expect(Man.email).toBe(email);
})