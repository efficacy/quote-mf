module.exports = {
    quote: quote
}

function quote(tags, source, next) {
    var quotes = load(source || 'pulp-fiction')
    var quote = selectFrom(quotes, matching(enhanced(tags)))
    return next && next(null, quote) || quote
}

function load(source) {
    try {
        return require('./lib/quotes/' + source)
    } catch(err) {
        return
    }
}

function enhanced(tags) {
    tags = tags && [].concat(tags) || []
    tags.associatedWith = function(quote) {
        if (tags.length === 0) return true
        return tags.every(function(tag) {
            return quote.tags.concat(quote.who.toLowerCase()).indexOf(tag.toLowerCase()) !== -1
        })
    }
    return tags
}

function selectFrom(quotes, toSpecifiedSubset) {
    var subset = quotes ? quotes.reduce(toSpecifiedSubset, []) : []
    return subset[Math.floor(Math.random() * subset.length)]
}

function matching(tags) {
    return function(quotes, quote) {
        return tags.associatedWith(quote) ? quotes.concat(quote) :  quotes
    }
}