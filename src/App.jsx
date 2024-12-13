import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import SideBar from './components/SideBar';
import Home from './pages/Home/Home';
import Monitoring from './pages/Monitoring/Monitoring';
import Settings from './pages/Settings/Settings';
import NotFound from './pages/NotFound/NotFound';
import Incidents from './pages/Incidents/Incident';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { isAuthenticatedAtom } from './atoms';
import { useAtom } from 'jotai';
import './scss/app.scss';

const Layout = ({ children }) => (
  <div className="App">
    <SideBar />
    <div className="mainLayout">{children}</div>
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {isAuthenticated ? (
        <>
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
            path="/incidents"
            element={
              <Layout>
                <Incidents />
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
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
