import React from 'react';
import './styles.css';

interface IUser {
  name: string;
  office: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return(
    <div>
      <h1>Welcome to my page!</h1>

      <strong>Name: </strong> {user.name} <br />
      <strong>Office: </strong> {user.office} <br />
    </div>
  );
};

export default User;
