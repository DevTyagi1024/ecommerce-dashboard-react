import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Register = () => {


    useEffect(function () {
        if (localStorage.getItem('user')) {
            navigate('/addProduct')
        }
    }, [])


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); // ✅ correct

    async function signup() {
        let details = { name, email, password };
        console.log(details);

        let response = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(details)
        });

        let result = await response.json();
        console.log("result", result);

        if (result.status) {
            // ✅ STORE DATA
            localStorage.setItem("user", JSON.stringify(result.user));

            // ✅ NOW redirect
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
