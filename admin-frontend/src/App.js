import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardPage from './pages/DashboardPage';
import ConversationsPage from './pages/ConversationsPage';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';

function App() {
  // TODO: Replace with real auth logic
  const isAuthenticated = true;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {isAuthenticated ? (
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
              <Topbar />
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/conversations" element={<ConversationsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="*" element={<LoginPage />} />
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App; 