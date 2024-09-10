import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Drawer, IconButton, Menu, MenuItem, Avatar, CssBaseline, Toolbar } from '@mui/material';
import { History, Info, Chat, Logout } from '@mui/icons-material'; // Add Chat icon
import { useNavigate, Route, Routes } from 'react-router-dom'; 
import Bot from './Bot';
import About from './About';

const drawerWidth = 240; // Sidebar width

export default function Home() {
  const [userName, setUserName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null); // For user dropdown
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden', background:'#6AC5FC' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1976D2', // Set sidebar background to blue
            color: 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Typography variant="h5" sx={{ p: 2, fontWeight: 'bold', color: 'white' }}>
          Dashboard
        </Typography>
        <List>
          {/* Chat (New List Item for Chat/Bot) */}
          <ListItem button onClick={() => navigate('chat')}>
            <ListItemIcon>
              <Chat sx={{ color: 'white' }} /> {/* Chat icon */}
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>

          {/* History */}
          <ListItem button onClick={() => navigate('bot')}>
            <ListItemIcon>
              <History sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>

          {/* About */}
          <ListItem button onClick={() => navigate('about')}>
            <ListItemIcon>
              <Info sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>

        {/* Username and Dropdown */}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ p: 2 }}>
          <IconButton onClick={handleMenuClick} sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <Avatar sx={{ mr: 1, bgcolor: 'white', color: 'blue' }}>{userName.charAt(0)}</Avatar>
            <Typography>{userName}</Typography>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleLogout}>
              <Logout fontSize="small" />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Drawer>

      {/* Main content area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Toolbar />
        <Box sx={{ flexGrow: 1, p: 2}}>
          <Routes>
            <Route path="chat" element={<Bot />} /> {/* New Route for Chat */}
            
            <Route path="about" element={<About />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
