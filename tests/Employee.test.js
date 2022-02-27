const Employee = require('../lib/Employee.js')

test ('get role function returns employee', () =>{
  
  let role= new Employee()
  expect(role.getRole()).toBe('Employee')

})