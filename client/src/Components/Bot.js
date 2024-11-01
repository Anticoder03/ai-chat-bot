import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Bot() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  async function generateAns() {
    if (!question) return; // Prevent empty submissions
    setLoading(true);

    // Add the user's question to the chat history
    const updatedChatHistory = [...chatHistory, { type: 'question', text: question }];
    setChatHistory(updatedChatHistory);

    try {
      const res = await axios({
        url: process.env.REACT_APP_GEMINI_API_KEY,
        method: "post",
        data: { "contents": [{ "parts": [{ "text": question }] }] }
      });

      const answer = res['data']['candidates'][0]['content']['parts'][0]['text'];
      setChatHistory([...updatedChatHistory, { type: 'answer', text: answer }]);
    } catch (error) {
      setChatHistory([...updatedChatHistory, { type: 'answer', text: 'Error fetching response, please try again.' }]);
    }

    setLoading(false);
    setQuestion(""); // Clear input field
  }

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100vh',
        width: '82vw',
        backgroundImage: `url('https://t4.ftcdn.net/jpg/02/17/89/41/240_F_217894165_H4jRalQ4eg9Kp8XUVGEa7XFDEPtTQ9PY.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 2,
        overflow: 'hidden',  // Prevent content overflow
      }}
    >
      {/* Chat History */}
      <Box 
        sx={{ 
          flexGrow: 1, 
          overflowY: 'auto',   // Allows scrolling for chat content
          padding: 2, 
          marginBottom: 2, 
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent background for chat area
          borderRadius: '1rem',
          boxShadow: 3,
          maxHeight: '75vh',    // Control height for chat area to prevent overflow
        }}
      >
        {chatHistory.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.type === 'question' ? 'flex-end' : 'flex-start',
              mb: 2
            }}
          >
            <Box
              sx={{
                padding: 1.5,
                maxWidth: '75%',
                backgroundColor: message.type === 'question' ? '#1976d2' : '#e0e0e0',
                color: message.type === 'question' ? '#fff' : '#000',
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
            </Box>
          </Box>
        ))}
        {loading && (
          <Box display="flex" justifyContent="flex-start" mb={2}>
            <CircularProgress size={20} />
          </Box>
        )}
      </Box>

      {/* Input Field and Button */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for input area
          padding: '10px',
          borderRadius: '8px',
        }}
        onSubmit={(e) => { e.preventDefault(); generateAns(); }} // Prevent form submission reload
      >
        <TextField
          label="Ask a question"
          variant="outlined"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{
            flexGrow: 1,
            maxHeight: '100px', // Limit the height of the textarea
            overflowY: 'auto',   // Enable scrolling if content exceeds the height
            maxWidth: '70%',     // Adjust the width of the textarea
          }}
          multiline
          rows={2}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={generateAns}
          disabled={loading || !question.trim()}
          sx={{ height: 'fit-content' }}
          endIcon={<SendIcon />}
        >
          {loading ? "Loading..." : "Send"}
        </Button>
      </Box>
    </Box>
  );
}
