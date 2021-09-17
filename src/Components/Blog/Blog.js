import React from "react";
import ReactTimeAgo from "react-time-ago";

// Blog Object Contains
// id
// message
// from
// timestamp
import "./Blog.css";

function Blog(props) {
  if (props.blog) {
    return (
      <article key={props.blog.id}>
        <hr style={{ width: "100%" }} size="3" color="grey" />
        <div>
          <span className="blog-name">{props.blog.from} </span>
          <span className="blog-date">
            <ReactTimeAgo date={new Date(props.blog.timestamp)} />
          </span>
        </div>
        <div className="post-text-container"> {props.blog.message} </div>
      </article>
    );
  } else
    return (
      <article>
        <h2> Error Loading</h2>
        <p> There may be a network or server error </p>
      </article>
    );
}

function convertTimestamp(time) {
  const dateObject = new Date(time);
  return dateObject.toLocaleString();
}

export default Blog;
