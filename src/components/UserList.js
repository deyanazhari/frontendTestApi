import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns ps-2  mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success ps-3">
          Add New
        </Link>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Information</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.information}</td>
                <td>
                  
                  <Link
                    to={`/Admin/edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <Button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
    </Table>
      </div>
    </div>
  );
};

export default UserList;
