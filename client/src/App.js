import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

export default function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <AppBar>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1, marginLeft: 30}}>
            AI Chat Bot
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/login"
              sx={{ marginRight: 1 }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="error"
              component={Link}
              to="/signup"
            >
              Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: 55 }}></div>

      {/* Routing */}
      <Box sx={{ marginTop: 8 }}> 
        <Routes>
          {/* Default route redirects to login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Box>
    </Router>
  );
}
