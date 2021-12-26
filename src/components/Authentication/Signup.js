import { Box, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      <TextField
        variant='outlined'
        label='Confirm Password'
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        fullWidth
      />
    </Box>
  );
};

export default Signup;
