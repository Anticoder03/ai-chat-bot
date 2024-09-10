import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const paperStyle = {
        padding: "2rem",
        margin: "100px auto",
        borderRadius: "1rem",
        boxShadow: "10px 10px 10px",
        backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent background
    };

    const heading = {
        fontSize: "2.5rem",
        fontWeight: 600,
        textAlign: "center",
    };

    const row = {
        display: "flex",
        marginTop: "2rem",
    };

    const btn = {
        marginTop: "2rem",
        fontSize: "1.2rem",
        fontWeight: 700,
        background: "blue",
        borderRadius: "0.5rem",
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signup", { name, email, password })
            .then(result => {
                if (result.status === 201) {
                    console.log("User created");
                    navigate('/login');
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email Already Exists.");
                } else {
                    console.log(err);
                }
            });
    }

    return (
        <div
            style={{
                backgroundImage: `url('https://t4.ftcdn.net/jpg/05/01/60/37/240_F_501603736_89BeNXA2xt0uJCapX4aXIkKozESrrjMP.jpg')`,
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
                        height: '60vh',
                    }}
                >
                    <Typography style={heading}>Sign Up</Typography>

                    <form onSubmit={handleSignUp}>
                        <TextField
                            style={row}
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                            required
                            label="Enter Name"
                            sx={{ label: { fontWeight: 700, fontSize: "1.3rem" } }}
                            type='text'
                            fullWidth
                        />
                        <TextField
                            style={row}
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            label="Enter Email"
                            sx={{ label: { fontWeight: 700, fontSize: "1.3rem" } }}
                            type='email'
                            fullWidth
                        />
                        <TextField
                            style={row}
                            name='password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            label="Enter Password"
                            sx={{ label: { fontWeight: 700, fontSize: "1.3rem" } }}
                            type='password'
                            fullWidth
                        />
                        <Button
                            fullWidth
                            variant='contained'
                            style={btn}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}
