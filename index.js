const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

const ipAddress = '96.51.246.195';

fetchCoordsByIP(ipAddress, (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', coords);
});

const coords = {
  latitude: '49.27670',
  longitude: '-123.13000'
};

fetchISSFlyOverTimes(coords, (error, passes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('Fly over times:', passes);
});