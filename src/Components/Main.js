import React, { useEffect, useState } from "react";
import Blog from "./Blog";

function Main() {
  const [allBlogs, setAllBlogs] = useState(null);

  useEffect(() => {
    async function fetchAllBlogs() {
      const url = "https://sigma-micro-blogging.herokuapp.com/";
      let res = await fetch(url);
      res = await res.json();
      setAllBlogs(res.messages);
    }

    fetchAllBlogs();
  }, []);

  const showBlogs = (blogs) => {
    return blogs.map((blog) => {
      return <Blog key={blog.id} blog={blog} />;
    });
  };

  return (
    <main>
      <h2>Blog Posts</h2>
      {allBlogs && showBlogs(allBlogs)}
    </main>
  );
}

export default Main;
