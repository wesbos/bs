@app
lion-9ii

@static

@http
get /
get /syntax
get /api/shows
get /api/shows/:number

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
