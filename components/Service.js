import React from "react";

const Service = ({ service }) => {
  const { id, name, username, email } = service;
  return (
    <div className='service'>
      <h2 className='text-center'>Name: {name}</h2>
      <p>Username: {username}</p>
      <p>
        <small>{email}</small>
      </p>
    </div>
  );
};
export default Service;
