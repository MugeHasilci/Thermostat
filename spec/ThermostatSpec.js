'use strict';

 describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('sets the temperature to 20 degrees', function(){
   expect(thermostat.temperature).toEqual(20);
 });
   it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('increase the temperature with an up function', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('decrease the temperature with a down function', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

});
