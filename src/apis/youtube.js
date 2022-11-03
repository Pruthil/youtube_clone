import axios from "axios";

const KEY = "AIzaSyDd0HICQE2Uul7lC12sDG2oYuM8ZZjfi40";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    type: "video",
    maxResults: "10",
    key: KEY,
  },
});
