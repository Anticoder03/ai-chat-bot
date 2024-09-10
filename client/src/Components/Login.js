import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const paperStyle = {
        padding: "2rem",
        margin: "100px auto",
        borderRadius: "1rem",
        boxShadow: "10px 10px 10px",
        backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent background
    };

    const headingStyle = {
        fontSize: "2.5rem",
        fontWeight: 600,
        textAlign: "center",
    };

    const rowStyle = {
        display: "flex",
        marginTop: "1.5rem",
    };

    const btnStyle = {
        marginTop: "2rem",
        fontSize: "1.2rem",
        fontWeight: 700,
        borderRadius: "0.5rem",
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Perform login request
        axios.post("http://localhost:3001/login", { email, password })
            .then((result) => {
                if (result.status === 200) {
                    console.log("Login successful");
                    // Store user's name in localStorage
                    localStorage.setItem('userName', result.data.name);
                    // Redirect user to Home page
                    navigate('/Home');
                }
            })
            .catch((err) => {
                if (err.response && err.response.status === 400) {
                    window.alert("Invalid credentials.");
                } else {
                    console.log(err);
                }
            });
    };

    return (
        <div
            style={{
                backgroundImage: `url('https://i.pinimg.com/736x/5d/91/bb/5d91bb6bb6db37992e338bbfcc8b8710.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width:'100vw',
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid container justifyContent="center">
                <Paper 
                    style={paperStyle} 
                    sx={{
                        width: {
                            xs: "80vw",
                            sm: "50vw",
                            md: "40vw",
                            lg: "30vw",
                            xl: "20vw",
                        },
                        height: '50vh',
                    }}
                >
                    <Typography style={headingStyle}>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            style={rowStyle}
                            fullWidth
                            label="Enter Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            sx={{ label: { fontWeight: 700, fontSize: "1.3rem" } }} 
                        />
                        <TextField
                            style={rowStyle}
                            fullWidth
                            label="Enter Password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            sx={{ label: { fontWeight: 700, fontSize: "1.3rem" } }} 
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            style={btnStyle}
                        >
                            Login
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}
