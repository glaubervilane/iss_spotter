const request = require('request');

const fetchCoordsByIP = function(ip, callback) {
  const url = `https://ipwhois.app/json/${ip}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Request failed with status code ${response.statusCode}`), null);
      return;
    }

    const data = JSON.parse(body);
    const success = data.success;

    if (!success) {
      const errorMessage = `Invalid IP address when fetching for IP ${ip}`;
      callback(Error(errorMessage), null);
      return;
    }

    const latitude = data.latitude;
    const longitude = data.longitude;
    const coordinates = { latitude, longitude };

    callback(null, coordinates);
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Request failed with status code ${response.statusCode}`), null);
      return;
    }

    const data = JSON.parse(body);
    const passes = data.response;

    callback(null, passes);
  });
};

module.exports = { fetchCoordsByIP, fetchISSFlyOverTimes };
