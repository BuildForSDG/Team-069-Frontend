import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Avatar, Button, TextField, FormControl } from '@material-ui/core';
import { Input } from '@material-ui/icons';

const login = () => {
  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: '150px' }}>
        <div className="t-login">
          <Avatar
            className="avatar"
            style={{
              width: '150px',
              height: '150px',
              margin: '0 auto',
              marginBottom: '20px',
              marginTop: '-80px',
              border: '4px solid white'
            }}
          >
            <Input />
          </Avatar>
          <FormControl>
            <TextField label="Email" type="text" variant="outlined" />
            <TextField label="Password" type="text" margin="normal" variant="outlined" />
            <Button variant="contained" size="large" margin="normal" color="secondary">
              Login
            </Button>
          </FormControl>
        </div>
      </Container>
    </div>
  );
};

export default login;
