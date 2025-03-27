let browserInfo = window.navigator.userAgent.toLocaleLowerCase();

let browserName;
let browserNameStr;
let os;

console.log(browserInfo);
if (browserInfo.includes('chrome/')) {
  browserNameStr = 'chrome';
} else if (browserInfo.includes('safari/')) {
  browserNameStr = 'safari';
} else if (browserInfo.includes('firefox/')) {
  browserNameStr = 'firefox';
}
const infoArr = browserInfo.split(' ');
for (let x of infoArr) {
  if (x.includes(browserNameStr)) {
    const tmp = x.split('/');

    browserName = document.createTextNode(
      `Browser: ${browserNameStr}, Version: ${tmp[1]}`
    );
  }
}

if (browserInfo.includes('win')) {
  os = 'Windows';
} else if (browserInfo.includes('mac')) {
  os = 'MacOS';
} else if (browserInfo.includes('linux')) {
  os = 'Linux';
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const screenAvailWidth = window.screen.availWidth;
const screenAvailHeight = window.screen.availHeight;
const screenSizes = `Screen size = ${screenWidth},${screenHeight}   Available size = ${screenAvailWidth},${screenAvailHeight}`;
console.log(screenAvailHeight);

const date = new Date();
const time = document.createTextNode(
  `Day: ${date.toLocaleDateString(
    'fi-FI'
  )} Time: ${date.getHours()}:${date.getMinutes()}`
);

const div = document.querySelector('#target');
const browserNameP = document.createElement('p');
browserNameP.append(browserName);
const osP = document.createElement('p');
osP.append(document.createTextNode(os));
const screensizesP = document.createElement('p');
screensizesP.append(screenSizes);
const dateP = document.createElement('p');
dateP.append(time);

div.append(browserNameP, osP, screensizesP, time);
