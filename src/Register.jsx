import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import api from "./services/api";   // ✅ FIXED

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
            const response = await api.post("/register", details);  // ✅ AXIOS

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

            // ✅ Better error handling
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