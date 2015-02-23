# Quote-MF
[![Build Status](https://travis-ci.org/acuminous/quote-mf.svg?branch=master)](https://travis-ci.org/acuminous/quote-mf)

[![NPM](https://nodei.co/npm/quote-mf.png?downloads=true)](https://nodei.co/npm/quote-mf/)


Node module which provides a context specific quote from a given source

```bash
> var format = require('util').format
> var quote = require('quote-mf').quote('pulp-fiction', 'shutdown')
> format('%s: %s', quote.who, quote.text)
'Vincent: Oh man, I shot Marvin in the face.'
```

You can also specify multiple tags

```bash
> var format = require('util').format
> var quote = require('quote-mf').quote('pulp-fiction', ['jules', 'shutdown'])
> format('%s: %s', quote.who, quote.text)
'Jules: If my answers frighten you then you should cease asking scary questions.'
```

## Why?
Because I like software with personality and to see startup / shutdown messages in logs

## Want More Quotes?
Send a PR
