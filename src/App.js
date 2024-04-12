import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UsersPage from './pages/UsersPage';
import UserPostsPage from './pages/UserPostsPage';
import UserAlbumsPage from './pages/UserAlbumsPage';

import './index.css'

const App = () => (
  <div className='container'>
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/:userId/posts" element={<UserPostsPage />} />
      <Route path="/:userId/albums" element={<UserAlbumsPage />} />
    </Routes>
  </div>
)

export default App;