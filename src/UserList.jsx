import React from 'react';
import { useSelector } from 'react-redux';
import './UserList.css';

const UserList = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="user-card">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
