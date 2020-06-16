import React, { useEffect, useState } from 'react';
import api from './services/api';

import User from './components/User';

interface IUser {
  name: string;
  office: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>('/users').then(res => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div className="App">
      { users.map(user => (
        <User key={user.name} user={user} />
      )) }
    </div>
  );
}

export default App;
