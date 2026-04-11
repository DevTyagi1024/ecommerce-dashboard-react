import React, { useEffect, useState } from "react";
import Header from "./Header";
import api from "./services/api";
import Banner from "./components/Banner";

const UserList = function () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await api.get("/users");
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

            <Banner
                title="User Management"
                subtitle="View and manage all users in the system."
                ctaText="Add New User"
                ctaLink="/"
            />

            <div className="user-list-container">
                <h2>Users List</h2>

                {users.length === 0 && <p style={{ textAlign: "center", marginTop: "40px" }}>No users found</p>}

                {users.map(user => (
                    <div key={user.id} className="user-card">
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;