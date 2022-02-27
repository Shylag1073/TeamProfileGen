const Intern = require('../lib/Intern')

test('if id = id of intern', () => {
let id = '12345'
let gina= new Intern('Gina', id)
  expect(gina.id).toBe('12345');
})


















// test('checks if 10 is equal to 10', () => {
//     expect(checkIfEqual(10, 10)).toBe(true);
//   });