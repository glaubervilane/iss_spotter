const { fetchCoordsByIP } = require('./iss');

const ipAddress = '96.51.246.195';

fetchCoordsByIP(ipAddress, (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', coords);
});