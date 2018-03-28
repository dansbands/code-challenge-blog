import React from 'react';

const Post = (props) => {

  return (
    <div className="Post-div">
      <h2 className="Post-heading">{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default Post;
