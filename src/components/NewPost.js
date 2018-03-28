import React from 'react';

const NewPost = props => {
  return (
    <div onChange={e => props.onChange(e)}>
      <h3>Title:</h3>
      <input className="New-post-input" name="title"></input>
      <h3>Body:</h3>
      <textarea className="New-post-input" name="body" rows="8" cols="100"></textarea>
      <div className="New-post-submit-button" onClick={() => props.onSubmit()}>Submit Post</div>
    </div>
  )
}

export default NewPost;
