import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Card = () => {
    const lodeUsers = useLoaderData()
    const [users, setUsers] = useState(lodeUsers)

    const handleDelete = id => {
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Delete successfull')
                    const remaning = users.filter(user => user._id !== id)
                    setUsers(remaning)
                }
            })
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            <p>{users.length}</p>
            {
                users.map(user => <p key={user._id
                }>{user.name} : {user.email}
                   <button><Link to={`/user/${user._id}`}>Update User</Link></button>
                    <button onClick={() => handleDelete(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Card;