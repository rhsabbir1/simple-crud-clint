import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const loaduser = useLoaderData()
    const handeuser = (e)=>{
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value
        
        const updateUser = {name , email}

        fetch(`http://localhost:5000/users/${loaduser._id}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                alert('User Data updated')    
            }
        })


    }
    return (
        <div>
            <Link to='/card'>Card</Link>
            <p>{loaduser.name}</p>
            <form onSubmit={handeuser}>
        <input type="text" name='name' defaultValue={loaduser.name} />
        <br />
        <input type="email" name="email" id="" defaultValue={loaduser.email} />
        <br />
        <input type="submit" value="Add User" />
      </form>
        </div>
    );
};

export default UpdateUser;