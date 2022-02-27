const Engineer = require('../lib/Engineer')

test('checks if name = name for engineer', () => {
let name = 'toby'

// constructor(name, id, email, github)
let Eng = new Engineer('toby', 43254325, 'toby@tobyrules.com', 'tobyisKewl')
    expect(Eng.name).toBe(name);
  });