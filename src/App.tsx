import React from 'react';
import UserList from './components/UserList';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-white font-bold mb-4">User List</h1>
      <UserList />
    </div>

  );
};

export default App;
