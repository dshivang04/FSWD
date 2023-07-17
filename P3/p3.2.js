const os = require('os');
const chalk = require('chalk');
const upperCase = require('upper-case');

function displayUserInfo() {
  const username = os.userInfo().username;
  const homeDirectory = os.homedir();
  const platform = os.platform();
  
  console.log(chalk.bold.white('Current User Information:'));
  console.log(chalk.yellow('Username:'), chalk.green(username));
  console.log(chalk.yellow('Home Directory:'), chalk.green(homeDirectory));
  console.log(chalk.yellow('Operating System Platform:'), chalk.green(platform));
}

function displayMemoryInfo() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const freeMemoryPercentage = (freeMemory / totalMemory) * 100;
  
  console.log(chalk.bold.white('System Memory Information:'));
  console.log(chalk.yellow('Total Memory:'), chalk.green(`${(totalMemory / 1024 / 1024).toFixed(2)} MB`));
  console.log(chalk.yellow('Free Memory:'), chalk.green(`${(freeMemory / 1024 / 1024).toFixed(2)} MB`));
  console.log(chalk.yellow('Percentage of Free Memory:'), chalk.green(`${freeMemoryPercentage.toFixed(2)}%`));
}

displayUserInfo();
console.log(''); // Adding an empty line for separation
displayMemoryInfo();

console.log(chalk.bold.blue(upperCase('Note: Chalk and upper-case external modules have been used for styling and formatting.')));
