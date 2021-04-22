import axios from "axios";


export function GetMainPage() {
    return axios.get(`http://localhost:5000/`);
}

export function PostUrl(data) {
    return axios.post(`http://localhost:5000/urls`,data);
}

export function GetShortUrl() {
    return axios.get(`http://localhost:5000/:shortUrl`)
}