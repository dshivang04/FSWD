const url = require('url');
const querystring = require('querystring');

function extractQueryParams(inputUrl) {
  const parsedUrl = url.parse(inputUrl);
  const queryParams = querystring.parse(parsedUrl.query);
  return queryParams;
}

const inputUrl = 'https://www.example.com/path?param1=value1&param2=value2';

const extractedParams = extractQueryParams(inputUrl);
console.log('Extracted Key-Value Pairs:');
console.log(JSON.stringify(extractedParams, null, 2));
