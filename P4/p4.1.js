const readline = require('readline');
const urlModule = require('url');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function resolveAbsoluteURL(baseUrl, relativePath) {
    const resolvedUrl = new URL(relativePath, baseUrl);
    return resolvedUrl.href;
}

function parseAndDisplay(url) {
  
  console.log("------Display the Components of URL------")
  const parsedUrl = urlModule.parse(url, true);
  console.log('Parsed URL Details:');
  console.log('Protocol:', parsedUrl.protocol);
  console.log('Host:', parsedUrl.host);
  console.log('Path:', parsedUrl.pathname);
  console.log('Query Parameters:', JSON.stringify(parsedUrl.query, null, 2));

  console.log("------Display the Absolute URL------")
  const baseUrl = 'https://www.example.com/base';
  const relativePath = '/path?param=value';
  const absoluteUrl = resolveAbsoluteURL(baseUrl, relativePath);
  console.log('Base URL:', baseUrl);
  console.log('Relative Path:', relativePath);
  console.log('Absolute URL:', absoluteUrl);
}

rl.question('Enter a URL: ', (url) => {
  parseAndDisplay(url);
  rl.close();
});