const pnRegex = /pn\/.*\/pd\/([0-9]+)\//;
const host = "www.animate-onlineshop.jp";
function replace(path) {
  if (pnRegex.test(path)) {
    history.replaceState(null, null, `/pn/pd/${pnRegex.exec(path)[1]}/`);
  }
}

export { host, replace };
