@app
dawn-i82

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
