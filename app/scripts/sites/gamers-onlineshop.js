const pdRegex = /pd\/[0-9A-Z]+/;
const host = "www.gamers-onlineshop.jp";
function replace(path) {
  if (pdRegex.test(path)) {
    history.replaceState(null, null, `/${pdRegex.exec(path)[0]}/`);
  }
}

export { host, replace };
