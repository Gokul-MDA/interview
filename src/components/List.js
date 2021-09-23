import React from "react";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  fetchData() {
    fetch("http://127.0.0.1:8000/user/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  deleteData(id) {
    fetch("http://127.0.0.1:8000/user/" + id + "/", {
      method: "DELETE",
      body: JSON.stringify(this.state),
    })
      .then((response) => response)
      .then((data) => {
        if (data) {
          this.fetchData();
        }
      });
  }

  render() {
    const usrData = this.state.data;
    const rows = usrData.map((usr) => (
      <tr key={usr.id}>
        <td>{usr.name}</td>
        <td>{usr.user_name}</td>
        <td>{usr.email}</td>
        <td>{usr.mobile}</td>
        <td>{usr.created}</td>
        <td>
          <button
            onClick={() => this.deleteData(usr.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Created Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default List;
