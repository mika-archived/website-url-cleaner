// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'


const hostname = location.host;

const files = require.context("./sites", false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  const site = files(key);
  console.log(`Register callback for ${site.host}`);
  modules[site.host] = site;
});

if (modules.hasOwnProperty(location.host)) {
  modules[location.host].replace(location.pathname);
}
