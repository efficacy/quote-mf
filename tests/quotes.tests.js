var assert = require('assert')
var quote = require('../index').quote
var fs = require('fs')
var path = require('path')

describe('Quotes', function() {

    it('should tolerate missing tags', function() {
        assert(quote('pulp-fiction').text)
    })

    it('should use the specified source', function() {
        assert.equal("I don't know how you survived, slave. It doesn't matter. Prepare to terminate.", quote('tron', ['sark', 'shutdown']).text)
    })

    it('should return undefined when source is missing', function() {
        assert.equal(quote('missing'), undefined)
    })

    it('should return undefined when no quote matches tags', function() {
        assert.equal(quote('pulp-fiction', 'foo'), undefined)
    })

    it('should pick a quote at random', function() {
        var quotes = {}
        for (var i = 0; i < 10; i++) {
            quotes[quote('pulp-fiction').text] = 1
        }
        assert(Object.keys(quotes).length > 1, 'Quotations were not randomly selected')
    })

    it('should ensure quotes are valid js', function(done) {
        fs.readdir(path.join(process.cwd(), '/lib/quotes'), function(err, files) {
            if (err) return done(err)
            done(files.reduce(function(_, file) {
                try {
                    require('../lib/quotes/' + file)
                } catch(err) {
                    return err
                }
            }))
        })
    })

})