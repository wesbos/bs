// learn more about HTTP functions here: https://arc.codes/primitives/http

exports.handler = async function http(req) {
  console.log(getShows());
  return {
    headers: { 'content-type': 'text/html; charset=utf8' },
    body: `
    hey ${req}
`,
  };
};
