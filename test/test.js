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