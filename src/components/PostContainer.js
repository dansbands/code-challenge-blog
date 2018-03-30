import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Api from '../services/api'

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
      Api.getPosts()
      .then(json => this.setState({ posts: json }));
  }

  handleClick = e => {
    this.setState({ new: !this.state.new });
  };

  handleChange = e => {
    this.setState({
      newPost: {
        ...this.state.newPost,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    this.state.newPost.title.length && this.state.newPost.body.length ? (
      Api.submitPost(this.state.newPost)
      .then(json => {
        this.setState({
          posts: [json, ...this.state.posts],
          new: false,
          newPost: { title: "", body: "" }
        });
      })
    ) : (
      alert('Your post must have a title and a body')
    )
  };

  render() {
    let posts;
    if (this.state.posts.length > 0) {
      posts = this.state.posts.map((p, i) => {
        return <Post key={i} title={p.title} body={p.body} />;
      });
    }

    return (
      <div>
        <div className="App-banner"></div>
        <div className="App-container">
          <div className="Posts-header">
            <h1>Blog Posts</h1>
            <button className="New-post-button" onClick={this.handleClick}>
              Write a Post
              <i className="material-icons">create</i>
            </button>
          </div>
          {this.state.new && (
            <NewPost onChange={this.handleChange} onSubmit={this.handleSubmit} />
          )}
          {posts}
        </div>
      </div>
    );
  }
}

export default PostContainer;
