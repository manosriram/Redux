import React from "react";

class Post extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Post.JS</h1>
        {this.state.posts.map((el, elInd) => {
          return (
            <div key={elInd}>
              <hr />
              <h3>{el.title}</h3>
              <p>{el.body}</p>
              <hr />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Post;
