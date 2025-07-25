import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: '',
      body: '',
      error: null,
    };
  }

  componentDidMount() {
    console.log("Posts component mounted!");
  }

  componentDidCatch(error, info) {
    alert('An error occurred: ' + error);
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addPost = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    if (title.trim() === '' || body.trim() === '') {
      alert('Both title and body are required!');
      return;
    }

    const newPost = { id: Date.now(), title, body };
    this.setState((prevState) => ({
      posts: [newPost, ...prevState.posts],
      title: '',
      body: ''
    }));
  };

  render() {
    const { posts, title, body, error } = this.state;

    if (error) {
      return <h2 style={{ color: 'red' }}>Error: {error}</h2>;
    }

    return (
      <div>
        <h2>Add a New Post</h2>
        <form onSubmit={this.addPost}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleInputChange}
          /><br /><br />
          <textarea
            name="body"
            placeholder="Body"
            value={body}
            onChange={this.handleInputChange}
          /><br /><br />
          <button type="submit">Add Post</button>
        </form>

        <h2>Posts</h2>
        {posts.length === 0 ? <p>No posts added yet.</p> : (
          posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        )}
      </div>
    );
  }
}

export default Posts;

