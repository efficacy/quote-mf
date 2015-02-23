# Quote-MF
[![Build Status](https://travis-ci.org/acuminous/quote-mf.svg?branch=master)](https://travis-ci.org/acuminous/quote-mf)

[![NPM](https://nodei.co/npm/quote-mf.png?downloads=true)](https://nodei.co/npm/quote-mf/)


Node module which provides a context specific quote from the given source

```bash
> var format = require('util').format
> var quote = require('quote-mf').quote('shutdown', 'pulp-fiction')
> format('%s: %s', quote.who, quote.text)
'Vincent: Oh man, I shot Marvin in the face.'
```

## Why?
Because I like software with personality and to see startup / shutdown messages in logs

## Want More Quotes?
Send a PR
