import React from "react";

class PostForm extends React.Component {
  state = {
    title: "",
    body: ""
  };

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    var post = {
      title: this.state.title,
      body: this.state.body
    };
    const res1 = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ post })
    });
    const res2 = await res1.json();
    console.log(res2);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label> <br />
            <input
              type="text"
              placeholder=""
              value={this.state.title}
              name="title"
              onChange={this.handleFormChange}
            />
          </div>
          <br />
          <div>
            <label>Body</label> <br />
            <textarea
              cols="30"
              rows="10"
              value={this.state.body}
              name="body"
              onChange={this.handleFormChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
export default PostForm;
