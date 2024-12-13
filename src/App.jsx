import React from 'react';
import SideBar from './components/SideBar';
import Home from './pages/Home/Home';
import './scss/app.scss';

const App = () => (
  <div className="App">
    <SideBar />
    <Home />
  </div>
);

export default App;
