import React from 'react';

class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;

