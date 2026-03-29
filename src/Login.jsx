import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import BASE_URL from "./services/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login() {
        const details = { email, password };

        try {
            let response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(details)
            });

            let result = await response.json();
            console.log(result);

            if (result.status) {
                localStorage.setItem("user", JSON.stringify(result.user));
                navigate("/AddProduct");
            } else {
                alert(result.message);
            }

        } catch (error) {
            console.error("Login Error:", error);
        }
    }

    return (
        <div>
            <Header />
            <h1>Login Page</h1>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;