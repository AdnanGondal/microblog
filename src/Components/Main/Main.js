import React, { useEffect, useState, useContext } from "react";
import Blog from "../Blog/Blog";
import Post from "../Post/Post";
import { userContext } from "../../App";
import "./Main.css";

function Main() {
  const [allBlogs, setAllBlogs] = useState(null);
  const { user, setUser } = useContext(userContext);
  const [count, setCount] = useState(0);

  async function fetchAllBlogs() {
    const url = "https://sigma-micro-blogging.herokuapp.com/";
    let res = await fetch(url);
    res = await res.json();
    setAllBlogs(res.messages);
  }

  useEffect(() => {
    fetchAllBlogs();
    setInterval(() => {
      fetchAllBlogs();
    }, 5000);
  }, []);

  //useEffect(() => {}, [allBlogs]);

  const showBlogs = (blogs) => {
    console.log(count);
    return blogs.map((blog) => {
      return <Blog key={blog.id} blog={blog} />;
    });
  };

  return (
    <main>
      <div className="blogs-container">
        {user && <Post user={user} update={fetchAllBlogs} />}
        <h2>All Posts</h2>
        {allBlogs && showBlogs(allBlogs)}
      </div>
    </main>
  );
}

export default Main;
