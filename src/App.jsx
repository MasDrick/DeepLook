import React from 'react';
import SideBar from './components/SideBar';
import Home from './pages/Home/Home';
import Monitoring from './pages/Monitoring/Monitoring';
import Tariffs from './pages/Tariffs/Tariffs';
import Settings from './pages/Settings/Settings';
import { Routes, Route } from 'react-router';
import './scss/app.scss';

const App = () => (
  <div className="App">
    <SideBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monitoring" element={<Monitoring />} />
      <Route path="/tariffs" element={<Tariffs />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </div>
);

export default App;
