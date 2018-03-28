import React from "react";
import Post from "./Post";
import NewPost from "./NewPost"

class PostContainer extends React.Component {
  state = {
    posts: [],
    new: false,
    newPost: {
      title: "",
      body: "",
    }
  };

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json =>
        this.setState({posts: json})
      );
  }

  handleClick = e => {
    this.setState({ new: !this.state.new })
  }

  handleChange = e => {
    this.setState({
      newPost: {
        ...this.state.newPost,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/Json',
        'Accept': 'Application/Json',
      },
      body: JSON.stringify(this.state.newPost)
    }).then(resp => resp.json())
      .then(json => {
        this.setState({
          posts: [
            json,
            ...this.state.posts
          ],
          new: false,
          newPost: { title: "", body: ""},
        })
      })
  }

  render() {
    let posts
    if(this.state.posts.length > 0) {
      posts = this.state.posts.map((p, i) => {
        return (
          <Post
            key={i}
            title={p.title}
            body={p.body}
            />
        );
      });
    }

    console.log('PostContainer', this.state);
    return (
      <div>
        <div className="Posts-header">
          <h1>Blog Posts</h1>
          <div className="New-post-button" onClick={this.handleClick}>
            <h5>Write a Post</h5>
            <i className="material-icons">create</i>
          </div>
        </div>
        {this.state.new &&
          <NewPost onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        }

        {posts}
      </div>
    );
  }
}

export default PostContainer;
