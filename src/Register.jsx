import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import BASE_URL from "./services/api";

const Register = () => {

    const navigate = useNavigate();

    useEffect(function () {
        if (localStorage.getItem('user')) {
            navigate('/addProduct')
        }
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signup() {
        let details = { name, email, password };

        let response = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(details)
        });

        let result = await response.json();

        if (result.status) {
            localStorage.setItem("user", JSON.stringify(result.user));
            navigate("/AddProduct");
        }
    }

    return (
        <div>
            <Header />
            <h1>Registration Page</h1>

            <input
                type="text"
                value={name}
                placeholder="Enter the name"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                value={email}
                placeholder="Enter the email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                value={password}
                placeholder="Enter the password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={signup}>Submit</button>
        </div>
    );
};

export default Register;