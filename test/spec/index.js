const assert = require('assert')
const context = require('../context/')
const testPackage_62 = require('../../src/')

const testPackage_62TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_62, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_62()
        })
    },
}

module.exports = testPackage_62TestSuite
