import axios from "axios";
import React,{useState,useEffect} from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/2";

 function Getpost() {
  const [post, setPost] = useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Getpost;
