import axios from "axios";

let localServer = "http://localhost:5000/";
let server = "https://url-shortner-express-server.herokuapp.com/";

export function GetMainPage() {
    return axios.get(`${server}`);
}

export function PostUrl(data) {
    return axios.post(`${server}urls`, data);
}

export function GetShortUrl() {
    return axios.get(`${server}:shortUrl`)
}