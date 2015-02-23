module.exports = {
    quote: quote
}

function quote(source, tags, next) {
    var quotes = loadFrom(source)
    var quote = selectFrom(quotes, matching(enhanced(tags)))
    return next && next(null, quote) || quote
}

function loadFrom(source) {
    try {
        return require('./lib/quotes/' + source)
    } catch(err) {
        return
    }
}

function enhanced(tags) {
    tags = tags && [].concat(tags) || []
    tags.associatedWith = function(quote) {
        return tags.length === 0 || tags.every(function(tag) {
            return quote.tags.concat(quote.who).map(toLowerCase).indexOf(tag.toLowerCase()) !== -1
        })
    }
    return tags
}

function toLowerCase(s) {
    return s.toLowerCase()
}

function selectFrom(quotes, toSpecifiedSubset) {
    var subset = quotes ? quotes.reduce(toSpecifiedSubset, []) : []
    return subset[Math.floor(Math.random() * subset.length)]
}

function matching(tags) {
    return function(quotes, quote) {
        return tags.associatedWith(quote) ? quotes.concat(quote) : quotes
    }
}