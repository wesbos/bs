// server.get('/api/shows/:number', (req, res) => {
//   const show = getShow(req.params.number);
//   if (show) {
//     res.json(show);
//     return;
//   }
//   res.status(404).json({ message: 'Sorry not found' });
// });

const arc = require('@architect/functions');
const { getShow } = require('@architect/shared/getShows');

// HTTP function
async function http(req, res) {
  const show = await getShow(req.params.number);
  if (show) {
    return { json: show };
  }
  return { status: 404, json: { message: 'Sorry not found' } };
}

exports.handler = arc.http.async(http);
