import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function RegisterPage() {
    let localServer = "http://localhost:5000/";
    let server = "https://url-shortner-serverside.herokuapp.com/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const history = useHistory();

    let data = {
        name,
        email,
        password
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        let registrationData = await axios.post(`${server}registerUsers`, data);
        history.push("/");
    };

    return (
        <>
            <div className="sidenav">
            <div><h1 style={{paddingLeft : "50px" , color : "white"}}>URL Shortner</h1></div>
                <div className="login-main-text">
                    <h2>
                        Application
                    <br /> Register Page
                    </h2>
                    <p>Register from here to access.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="register-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label><b>Name</b></label>
                                <input required
                                    type="text"
                                    className="form-control"
                                    placeholder="User Name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Email</b></label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Password</b></label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
