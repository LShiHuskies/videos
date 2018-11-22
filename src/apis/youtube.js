import axios from 'axios';

const KEY = 'AIzaSyABl-UreOPp5Zelyzx8PxFU5RhzTR7nZkM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
