import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Card = () => {
    const users = useLoaderData()
    return (
        <div>
            <p>{users.length}</p>
            {
                users.map(user => <p key={user._id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Card;