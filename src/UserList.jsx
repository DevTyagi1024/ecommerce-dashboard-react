import React, { useEffect, useState } from "react";
import Header from "./Header";
import BASE_URL from "./services/api";

const UserList = function () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/users`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status) {
                    setUsers(data.users);
                }
            })
            .catch(err => console.error(err));
    }, []);

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