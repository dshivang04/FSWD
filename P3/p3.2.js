const chalk = require('chalk');
const upperCase = require('upper-case');

// Example usage of chalk module
console.log(chalk.blue('This text is in blue color!'));
console.log(chalk.red.bold('This text is in bold red color!'));
console.log(chalk.bgYellow.black('This text has a yellow background and black color!'));

// Example usage of upper-case module
const text = 'convert me to uppercase';
console.log(upperCase.upperCase(text));
