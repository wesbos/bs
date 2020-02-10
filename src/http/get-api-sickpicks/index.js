const arc = require('@architect/functions');
const { getAllShowSickPicks } = require('@architect/shared/getShows');

// HTTP function
async function http(req, res) {
  const sickPicks = await getAllShowSickPicks();
  return { json: sickPicks };
}

exports.handler = arc.http.async(http);
