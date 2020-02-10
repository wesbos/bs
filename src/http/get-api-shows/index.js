const arc = require('@architect/functions');
const { getShows } = require('@architect/shared/getShows');

// HTTP function
async function http(req, res) {
  console.log('Getting shows...');
  const shows = await getShows();
  return { json: shows };
}

exports.handler = arc.http.async(http);
