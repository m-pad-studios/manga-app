import React from "react";
import { graphql } from "react-apollo";
import { v4 as uuid } from "uuid";



function reload() {
  window.location.reload();
}

function alert() {
  document.getElementById("warning").innerHTML =
    "Can't submit an empty comment!";
  setTimeout(function () {
    document.getElementById("warning").innerHTML = "";
  }, 2000);
}

function getTime() {
  let date = new Date();
  

  document.getElementById("time").value = date;
}


class AddGalleryComment extends React.Component {
  state = {
    text: "",
    user: "",
    created: "",
  };

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  addMyCustomType = () => {
    getTime();
    if (
      document.getElementById("user").value !=
      document.getElementById("checkuser").innerHTML
    ) {
      return reload();
    }
    if (document.getElementById("words").value === "") {
      return alert();
    }
    this.state.user = document.getElementById("user").value;
    this.state.created = document.getElementById("time").value;
    const { text, user, created } = this.state;
    this.props.onAdd({
      id: uuid(),
      text,
      user,
      created,
    });

    this.setState({
      text: "",
      user: "",
      created: "",
    });
  };

  render() {
    return (
      <div className="the-comments">
        <input
          id="words"
          className="textarea"
          value={this.state.text}
          onChange={(evt) => this.onChange("text", evt.target.value)}
          placeholder="leave a comment"
        />
        <br></br>
        <br></br>
        <input
          id="user"
          value={(this.state.user )}
          className="white"
          onChange={(evt) => this.onChange("user", evt.target.value)}
          disabled="true"
          hidden="true"
        />
        <input
          id="time"
          value={(this.state.created )}
          className="white"
          //onChange={(evt) => this.onChange("created", evt.target.value)}
          disabled="true"
          hidden="true"
        />
        <a className="myButton" onClick={this.addMyCustomType}>
          Add Comment
        </a>
        <hr></hr>
        <label
          id="checkuser"
          className="white"
          value=""
          hidden="true"
        ></label>
        <div id="warning" className="warning-tag"></div>
      </div>
    );
  }
}

export default AddGalleryComment;
