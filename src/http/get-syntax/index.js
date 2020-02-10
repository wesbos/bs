const arc = require('@architect/functions');
const next = require('next');
const { Router } = require('./routes');
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 6969;
const app = next({ dev });
const handle = app.getRequestHandler();
const express = require('express');

// HTTP function
async function http(req, res) {
    // const server = express();
  // // Custom Next.js URLs
  // Router.forEachPrettyPattern((page, pattern, defaultParams) => {
  //   server.get(pattern, (req, res) => {
  //     app.render(
  //       req,
  //       res,
  //       `/${page}`,
  //       Object.assign({}, defaultParams, req.query, req.params)
  //     );
  //   });
  // });

  // everything else
  return handle(req, res);
  // server.get('*', (req, res) => handle(req, res));
  // server.listen(port, () => `Listening on ${port}`);
}

exports.handler = http;
