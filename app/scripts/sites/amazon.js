const gpRegex = /gp\/product\/[0-9A-Z]{10}/;
const dpRegex = /dp\/[0-9A-Z]{10}/;
const host = "www.amazon.co.jp";
function replace(path) {
  if (gpRegex.test(path)) {
    history.replaceState(null, null, `/${gpRegex.exec(path)[0]}/`);
  } else if (dpRegex.test(path)) {
    history.replaceState(null, null, `/${dpRegex.exec(path)[0]}/`);
  }
}

export { host, replace };
