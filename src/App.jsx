import React from 'react';
import SideBar from './components/SideBar';
import Home from './pages/Home/Home';
import Monitoring from './pages/Monitoring/Monitoring';
import Tariffs from './pages/Tariffs/Tariffs';
import Settings from './pages/Settings/Settings';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route } from 'react-router';
import './scss/app.scss';

const Layout = ({ children }) => (
  <div className="App">
    <SideBar />
    <div className="mainLayout">{children}</div>
  </div>
);

const App = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path="/monitoring"
      element={
        <Layout>
          <Monitoring />
        </Layout>
      }
    />
    <Route
      path="/tariffs"
      element={
        <Layout>
          <Tariffs />
        </Layout>
      }
    />
    <Route
      path="/settings"
      element={
        <Layout>
          <Settings />
        </Layout>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
