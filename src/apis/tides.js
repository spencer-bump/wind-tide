 // "proxy":  "https://tides.p.rapidapi.com",
//

// https://tides.p.rapidapi.com/tides?latitude=44.414&longitude=-2.097&duration=1440&interval=60
import { TIDES_KEY } from '../config/keys';

var unirest = require("unirest");

var req = unirest("GET", "https://tides.p.rapidapi.com/tides");

req.query({
  "latitude": "20.9030556",
  "longitude": "-156.4430556",
  "duration": "1440",
  "interval": "60"
});

req.headers({
  "x-rapidapi-key": TIDES_KEY,
  "x-rapidapi-host": "tides.p.rapidapi.com",
  "useQueryString": true
});

export default req;


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
