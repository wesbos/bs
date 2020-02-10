@app
dawn-i82

@static

@http
get /
get /syntax
get /api/shows
get /api/shows/:number
get /api/sickpicks

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
