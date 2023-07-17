const os = require('os');

function displayUserInfo() {
  const username = os.userInfo().username;
  const homeDirectory = os.homedir();
  const platform = os.platform();
  
  console.log('Current User Information:');
  console.log('Username:', username);
  console.log('Home Directory:', homeDirectory);
  console.log('Operating System Platform:', platform);
}

function displayMemoryInfo() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const freeMemoryPercentage = (freeMemory / totalMemory) * 100;
  
  console.log('System Memory Information:');
  console.log('Total Memory:', totalMemory / 1024 / 1024, 'MB');
  console.log('Free Memory:', freeMemory / 1024 / 1024, 'MB');
  console.log('Percentage of Free Memory:', freeMemoryPercentage.toFixed(2), '%');
}

displayUserInfo();
console.log(''); // Adding an empty line for separation
displayMemoryInfo();