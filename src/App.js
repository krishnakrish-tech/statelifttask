import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React,{useState,useEffect} from "react";
import Getpost from './getpost';
import Crepost from './createpost';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

 function App() {
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
      <Getpost/>
      <Crepost/>
    </div>
  );
}

export default App;
