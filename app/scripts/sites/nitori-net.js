const exRegex = /store\/ja\/ec\/.*\/([0-9]+)/;
const host = "www.nitori-net.jp";
function replace(path) {
  if (exRegex.test(path)) {
    history.replaceState(null, null, `/store/ja/ec/${exRegex.exec(path)[1]}/`);
  }
}

export { host, replace };
