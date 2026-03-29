import React, { useEffect, useState } from "react";
import Header from "./Header";
import api from "./services/api"; // ✅ FIXED

const UserList = function () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await api.get("/users"); // ✅ axios
            const data = response.data;

            console.log("USERS:", data);

            if (data.status) {
                setUsers(data.users);
            } else {
                setUsers([]);
            }

        } catch (error) {
            console.error("USER LIST ERROR:", error);

            if (error.response) {
                alert(error.response.data.message || "Failed to load users");
            } else {
                alert("Server is down or waking up (Render delay)");
            }
        }
    };

    return (
        <div>
            <Header />
            <h2>User List</h2>

            {users.length === 0 && <p>No users found</p>}

            {users.map(user => (
                <div key={user.id}>
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Email:</b> {user.email}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default UserList;