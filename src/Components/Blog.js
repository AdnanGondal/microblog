import React from "react";

// Blog Object Contains
// id
// message
// from
// timestamp

function Blog(props) {
  if (props.blog) {
    return (
      <article key={props.blog.id}>
        <p>User: {props.blog.from} </p>
        <p>Posted on: {convertTimestamp(props.blog.timestamp)} </p>
        <p>Post: {props.blog.message} </p>
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
