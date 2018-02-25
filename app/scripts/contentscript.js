// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

// gp/product/ASIN
const gpRegex = /gp\/product\/[0-9A-Z]{10}/;
const dpRegex = /dp\/[0-9A-Z]{10}/;


if (gpRegex.test(location.pathname)) {
  const newUrl = gpRegex.exec(location.pathname)[0];
  console.log(`[AMZN-URL-SHRTNR] Replacing URL to /${newUrl}/`);
  history.replaceState(null, null, `/${newUrl}/`);
}

if (dpRegex.test(location.pathname)) {
  const newUrl = dpRegex.exec(location.pathname)[0];
  console.log(`[AMZN-URL-SHRTNR] Replaceing URL to /${newUrl}/`);
  history.replaceState(null, null, `/${newUrl}/`);
}