// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfilePage from './UserPage';
import EditProfilePage from './EditProfilePage';

const App = () => {
  // Carregar os dados do localStorage ao iniciar o aplicativo
  const initialUser = JSON.parse(localStorage.getItem('user')) || {
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'ABC Company',
    lastLogin: '2024-02-25 12:30 PM',
  };

  const [user, setUser] = useState(initialUser);

  const handleEditSave = (editedUser) => {
    setUser(editedUser);
  };

  // Salvar os dados do usuário no localStorage sempre que o usuário for atualizado
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<UserProfilePage user={user} onEditClick={(user) => handleEditSave(user)} />}
        />
        <Route
          path="/edit-profile"
          element={<EditProfilePage user={user} onSave={(editedUser) => handleEditSave(editedUser)} />}
        />
      </Routes>
    </Router>
  );
};

export default App;









