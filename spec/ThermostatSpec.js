'use strict';

describe('Thermostat', function(){

  var thermostat;

it('starts at 20', function(){
  thermostat = new Thermostat();
  expect(thermostat.temperature()).toEqual(20);
});
});












// describe('Thermostat', function() {
//
//   var thermostat;
//
//   beforeEach(function() {
//     thermostat = new Thermostat();
//   });
//
//   it('starts at 20 degrees', function() {
//     expect(thermostat.temperature).toEqual(20);
//   });
// });
