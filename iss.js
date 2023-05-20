const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Request failed with status code ${response.statusCode}`), null);
      return;
    }

    const data = JSON.parse(body);
    const ip = data.ip;
    callback(null, ip);
  });
};

module.exports = { fetchMyIP };
