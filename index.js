const {getContent} = require('./scraper');
const sendMail = require('./notification');


const url = "https://www.sharp.com/health-classes/volunteer-registration-grossmont-center-covid-19-vaccine-clinic-2558"
let prevResults = [];
let newResults = [];

async function run () {
  let isTrue = true;
  const dataToCheck =  await getContent(url); 
  if (prevResults.length === 0) {
    prevResults = dataToCheck;
  } else {
    newResults = dataToCheck;
    for (let i=0; i<newResults.length; i++) {
      if(newResults[i] === prevResults[i]){
        continue;
      } else {
        isTrue = false;
        return;
      }
    }
   isTrue? console.log('no changes') : sendMail('This is an alert', 'Covid Volunteers', 'Click here to see more', url)
  }
}

function compare() {
  run()
}

setInterval(compare, 10*1000);
