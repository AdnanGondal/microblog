import React, { useState } from "react";
import "./Post.css";

function Post(props) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    async function postBlog() {
      const data = { message: text, from: props.user };
      console.log(data);
      let res = await fetch(
        "https://sigma-micro-blogging.herokuapp.com/SigmaStudent99",
        { method: "POST", body: JSON.stringify(data) }
      );
      res = await res.json();
      console.log(res);
    }
    postBlog();
    evt.preventDefault();
    props.update();
  };

  return (
    <div className="new-post-container">
      <form className="post-form" onSubmit={handleSubmit}>
        <label>What are you thinking about?</label>
        <textarea onChange={handleChange} value={text}></textarea>
        <button> Post </button>
      </form>
    </div>
  );
}

export default Post;
