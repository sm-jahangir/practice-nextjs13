import React, { useEffect, useState } from "react";
import Service from "../components/Service";

const user = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className='container'>
      <h2>Our User</h2>
      <hr />
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default user;
