import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import api from "./services/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login() {
        const details = { email, password };

        try {
            const response = await api.post("/login", details);
            const result = response.data;

            console.log("LOGIN RESPONSE:", result);

            if (result.status) {
                localStorage.setItem("user", JSON.stringify(result.user));
                navigate("/AddProduct");
            } else {
                alert(result.message || "Login failed");
            }

        } catch (error) {
            console.error("LOGIN ERROR:", error);

            if (error.response) {
                alert(error.response.data.message || "Server error");
            } else {
                alert("Server is down or waking up (Render delay)");
            }
        }
    }

    return (
        <div>
            <Header />
            <div className="auth-container">
                <div className="auth-form">
                    <h1>Login</h1>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={login}>Login</button>

                    <div className="auth-link">
                        Don't have an account? <a href="/Register">Register here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;