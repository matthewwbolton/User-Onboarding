import React from 'react';

const Users = (props) => {
    return (
        <div>
            {props.users.map((elem, i) => {
                return <div key={i}>
                    <h1>{elem.name}</h1>
                    <h2>{elem.email}</h2>
                    <h3>{elem.tos}</h3>
                    </div>
                    
            })}
        </div>
    );
};

export default Users;