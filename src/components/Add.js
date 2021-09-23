import React from "react";
class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      user_name: "",
      email: "",
      mobile: "",
      password: "",
      confirm_password: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // Input Change Handler
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Submit Form
  submitForm() {
    fetch("http://127.0.0.1:8000/user/", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    this.setState({
      name: "",
      user_name: "",
      email: "",
      mobile: "",
      password: "",
      confirm_password: "",
    });
  }

  render() {
    return (
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Name</th>
            <td>
              <input
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                required
                className="form-control"
                placeholder="Enter Name"
              />
            </td>
          </tr>
          <tr>
            <th>UserName</th>
            <td>
              <input
                value={this.state.user_name}
                name="user_name"
                onChange={this.changeHandler}
                type="text"
                required
                placeholder="Enter UserName"
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <input
                value={this.state.email}
                name="email"
                onChange={this.changeHandler}
                type="email"
                required
                placeholder="Enter Email"
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>Mobile</th>
            <td>
              <input
                value={this.state.mobile}
                name="mobile"
                onChange={this.changeHandler}
                type="tel"
                required
                pattern="[+]{1}[0-9]{11,14}"
                placeholder="Enter Mobile"
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>Password</th>
            <td>
              <input
                value={this.state.password}
                name="password"
                onChange={this.changeHandler}
                type="password"
                required
                placeholder="Enter Password"
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>Confirm Password</th>
            <td>
              <input
                value={this.state.confirm_password}
                name="confirm_password"
                onChange={this.changeHandler}
                type="password"
                required
                placeholder="Enter Confirm Password"
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input
                type="submit"
                onClick={this.submitForm}
                className="btn btn-dark"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Add;
