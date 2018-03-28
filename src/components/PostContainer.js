import React from 'react'
import Post from './Post.js'

class PostContainer extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({
        posts: [
          ...this.state.posts,
          json
        ]
      }))
  }

  render() {
    console.log("In PostContainer", this.state.posts);
    let posts = this.state.posts.map(p => {
      return <Post data={p} key={p.id} />
    });

    return (
      <div className="App-body">
        <h1>Blog Posts</h1>
        {posts}
      </div>
    )
  }
}

export default PostContainer;
