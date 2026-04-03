import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import api from "./services/api";

const Register = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/addProduct');
        }
    }, [navigate]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signup() {
        let details = { name, email, password };

        try {
            const response = await api.post("/register", details);

            const result = response.data;

            console.log("REGISTER RESPONSE:", result);

            if (result.status) {
                localStorage.setItem("user", JSON.stringify(result.user));
                navigate("/AddProduct");
            } else {
                alert(result.message || "Registration failed");
            }

        } catch (error) {
            console.error("REGISTER ERROR:", error);

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
                    <h1>Register</h1>

                    <input
                        type="text"
                        value={name}
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={signup}>Register</button>

                    <div className="auth-link">
                        Already have an account? <a href="/Login">Login here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;