const { promisify } = require('util');
const glob = promisify(require('glob'));
const marked = require('meta-marked');
const { readFile } = require('fs');

const readAFile = promisify(readFile);
const format = require('date-fns/format');

const pad = num => `000${num}`.substr(-3);

let cachedShows = [];

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a rel="noopener noreferrer" target="_blank" href="${href}"> ${text}</a>`;
};

const loadShows = async () => {
  // load from cache
  if (cachedShows.length) {
    return cachedShows;
  }

  // otherwise regen
  const files = await glob('./node_modules/@architect/shared/shows/*.md');
  const markdownPromises = files.map(file => readAFile(file, 'utf-8'));
  const showMarkdown = await Promise.all(markdownPromises);

  cachedShows = showMarkdown
    .map(md => marked(md, { renderer })) // convert to markdown
    .map((show, i) => {
      const { number } = show.meta;

      return {
        ...show.meta,
        html: show.html,
        notesFile: files[i],
        displayDate: format(parseFloat(show.meta.date), 'MMM do, yyyy'),
        number,
      };
    }) // flatten
    .map(show => ({ ...show, displayNumber: pad(show.number) })) // pad zeros
    .reverse();
  return cachedShows;
};

exports.getShows = async () => {
  const shows = await loadShows();
  const now = Date.now();
  return shows.filter(show => show.date < now);
};

exports.getShow = async number => {
  const shows = await loadShows();
  const show = shows.find(showItem => showItem.displayNumber === number);
  return show;
};

exports.getAllShowSickPicks = async () => {
  const shows = await loadShows();
  // Since the sick picks parsed markdown id is not consistent,
  // this RegEx finds the first <h2> tag with an id that contains
  // the sequential characters "icks" from "picks" and selects
  // characters from the string up until the next <h2> tag
  // i.e. the next section (usually Shameless Plugs)
  const sickPickRegex = /(<h2 id=".*(icks).*">*[\s\S]*?(?=<h2))/g;
  const headerRegex = /[\s\S]*(?=<\/h2)/; // finds all characters up until the first closing </h2>

  return shows.reduce((sickPicksAcc, show) => {
    const episode = `<h2>Episode Number: ${show.number} - Sick Picks`;
    const sickPickMatch = show.html.match(sickPickRegex);

    if (sickPickMatch) {
      const html = sickPickMatch[0].replace(headerRegex, episode);
      const sickPick = {
        id: show.number,
        html,
      };

      return sickPicksAcc.concat(sickPick);
    }

    return sickPicksAcc;
  }, []);
};
