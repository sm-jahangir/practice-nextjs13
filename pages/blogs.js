import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardComponent from "../components/Blog/CardComponent";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const blogs = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div className='container'>
      <h1>This is Blog page</h1>
      <Row xs={1} md={4} className='g-4'>
        {posts.map((post) => (
          <CardComponent key={post.id} post={post}></CardComponent>
        ))}
      </Row>
    </div>
  );
};

export default blogs;
