import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = e => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleWordCount = e => {
    this.setState({maxChars: e.target.value})
  }

  render() {
    let length = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.handleChange} type="text" name="message" id="message" />
        <div>words left: {length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
