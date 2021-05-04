import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = e => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

   handleSubmit = e => {
     e.preventDefault()
    if (!this.state.username || !this.state.password)
    return this.props.handleLogin(this.state)
   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleInputChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.handleInputChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button onSubmit={this.props.handleLogin} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
