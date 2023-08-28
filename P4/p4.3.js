const path = require('path');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkSameFile(path1, path2) {
  const absolutePath1 = path.resolve(path1);
  const absolutePath2 = path.resolve(path2);

  if (fs.existsSync(absolutePath1) && fs.existsSync(absolutePath2)) {
    const isSameFile = fs.statSync(absolutePath1).ino === fs.statSync(absolutePath2).ino;
    console.log('Are they the same file?', isSameFile);
  } else {
    console.log('One or both file paths are invalid.');
  }
}

function extractFileExtension(filePath) {
  const fileExtension = path.extname(filePath);
  console.log('File Extension:', fileExtension);
}

rl.question('Enter the first file path: ', (path1) => {
  rl.question('Enter the second file path: ', (path2) => {
    checkSameFile(path1, path2);

    const exampleFilePath = '/path/to/example/file1.txt';
    extractFileExtension(exampleFilePath);

    rl.close();
  });
});
