import { Box, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { CryptoState } from '../../CryptoContext';

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAlert } = CryptoState();

  const handleSubmit = () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill in all the fields.",
        type: "error",
      });
      return;
    }
  };

  return (
    <Box
      p={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <TextField
        variant='outlined'
        type='email'
        label='Enter Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant='outlined'
        label='Enter Password'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant='contained'
        size='large'
        onClick={handleSubmit}
        style={{ backgroundColor: 'steelblue' }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
