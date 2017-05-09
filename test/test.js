'use strict';



var expect = require('chai').expect;
var logger = require('../index');

describe('Testing console logger', function() {
    it('should log out argument as a string', function() {
        var testString = 'Test string';
        var result = logger(testString);
        expect(result).to.equal(testString);
    });

    it('should log out error messagre if no argument provided', function() {
        var testString = 'Error. No input provided.';
        var result = logger();
        expect(result).to.equal(testString);
    });
});

var Log = require('../log');

describe('Testing Log class', function() {
    
    let testString = 'Test string';
    let log = new Log(testString);   

    beforeEach(() => 
        log = new Log(testString)
    );
    
    it('should log out  a string', function() {
        var result = log.log(testString);
        expect(result).to.equal(testString);
    });
  
    
    it('should return value via get(ter) method', function() {
        var result = log.value;
        expect(result).to.equal(testString);
    });         
    
    it('should set value via set(ter) method', function() {
        let newValue = 'New value';
        log.value = newValue;
        expect(log.value).to.equal(newValue);
    });     
    
    it('should throw Error if no value provided', function() {
        expect(() => {
            let newLog = new Log();
        }).to.throw(Error, 'No input provided.');
    });         
    
    it('should throw Error if provided value is not a string', function() {
        expect(() => {
            let newLog = new Log(10022);
        }).to.throw(Error, 'String must be provided.');
    });     
});
