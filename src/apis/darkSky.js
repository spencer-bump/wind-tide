import axios from 'axios';

//  "proxy":  "https://api.darksky.net",

export default axios.create({
  baseURL: `/`
})
