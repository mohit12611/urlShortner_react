import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function LoginPage() {
    let localServer = "http://localhost:5000/";
    let server = "https://url-shortner-serverside.herokuapp.com/";

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let data = {
        email,
        password
    }
    let handleSubmit = async (e) => {
        e.preventDefault();

        let recievedTokenData = await axios.post(`${server}loginUser`, data);

        window.localStorage.setItem("app_token", recievedTokenData.data.token);

        history.push("/mainpage");
    }

    return (
        <>
    
            <div className="sidenav">
                <div><h1 style={{paddingLeft : "50px" , color : "white"}}>URL Shortner</h1></div>
                <div className="login-main-text">
                    
                    <h2>Application<br /> Login Page</h2>
                    <p>Login or register from here to access.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label><b>Email</b></label>
                                <input required type="text" className="form-control" placeholder="User Name" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                            <div className="form-group">
                                <label><b>Password</b></label>
                                <input required type="text" className="form-control" placeholder="Password" value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link to="/register" style={{paddingLeft : "20px"}}>Register</Link>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

}


export default LoginPage;