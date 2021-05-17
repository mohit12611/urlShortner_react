import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
//import { GetMainPage, PostUrl, GetShortUrl } from './axios';
import { PostUrl } from './axios';


function MainPage() {

    let localServer = "http://localhost:5000/";
    let server = "https://url-shortner-express-server.herokuapp.com/";

    const [urlData, setUrlData] = useState([]);
    const [longUrl, setLongUrl] = useState("");
    const [tokenData, setTokenData] = useState({});

    useEffect(async () => {
        console.log("hi");
        let checkToken = await axios.get(`${server}checkToken`, {
            headers: {
                authorization: window.localStorage.getItem("app_token")
            }
        })
        console.log("checkToken---", checkToken.data.links);
        setUrlData(checkToken.data.links);
        setTokenData(checkToken);
    }, []);


    let submitUrl = async (e) => {
        e.preventDefault();
        const urlToAdd = longUrl;
        let urlAndToken = { urlToAdd, "_id": tokenData.data._id };
        console.log("urlAndToken---", urlAndToken);
        let links = await PostUrl(urlAndToken)
        console.log("links----", links);
        setLongUrl("");
        window.location.reload();
    }

    return (
        <>
            <form onSubmit={submitUrl} className="my-4 form-inline">
                <input required type="text" name="url" id="url" placeholder="URL" className="col form-control mr-2" value={longUrl} onChange={(e) => {
                    setLongUrl(e.target.value)
                }}></input>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <table className="table tabe-striped table-responsive">
                <thead>
                    <tr>
                        <th>Full URL</th>
                        <th>Short URL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        urlData ? urlData.map((url) => {
                            if(tokenData.data){
                                return (
                                    <tr>
                                        <td>
                                            <a href={url.longUrl}>{url.longUrl}</a> 
                                        </td>
                                        <td>
                                            <a href={`${server}${tokenData.data._id}/${url.shortUrl}`} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a>
                                        </td>
                                    </tr>
                                )
                            }
                            
                        }) : null
                    }

                </tbody>

            </table>


        </>

    )
}

export default MainPage;