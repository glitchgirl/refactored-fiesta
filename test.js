// Require the built in 'assertion' library
let calcArea = require('./index.js');
let assert = require('assert');
// Create a test suite (group) called Math
describe('Area Calculations', function () {
    // Test One: A string explanation of what we're testing
    it('the area of a triangle b-10 h-5 should be 25', function () {
        assert.equal(25,calcArea.findAreaTriangle(10,5));
    });
});

