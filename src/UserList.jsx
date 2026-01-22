import React, { useEffect, useState } from "react";
import Header from "./Header";

const UserList = function () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/users")
            .then(res => res.json())
            .then(data => {
                console.log(data); // 🔍 debug
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
