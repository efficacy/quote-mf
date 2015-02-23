var assert = require('assert')
var quote = require('../index').quote

describe('Quotes', function() {

    it('should default to pulp fiction', function() {
        assert.equal('Oh man, I shot Marvin in the face.', quote(['vincent', 'shutdown']).text)
    })

    it('should tolerate missing tags', function() {
        assert(quote().text)
    })

    it('should use the specified source', function() {
        assert.equal("I don't know how you survived, slave. It doesn't matter. Prepare to terminate.", quote(['shutdown', 'sark'], 'tron').text)
    })

    it('should return undefined when source is missing', function() {
        assert.equal(quote('foo', 'missing'), undefined)
    })

    it('should return undefined when no quote matches tags', function() {
        assert.equal(quote('foo'), undefined)
    })

    it('should pick a quote at random', function() {
        var quotes = {}
        for (var i = 0; i < 10; i++) {
            quotes[quote().text] = 1
        }
        assert(Object.keys(quotes).length > 1, 'Quotations were not randomly selected')
    })

})