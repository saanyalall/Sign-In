
import { Box, TextField, Typography,Button} from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import React from 'react'

function FirsttPage() {

  
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !phone || !email) {
      alert('They must enter their details before accessing the page'); // Set error message
    } 
    else {
  
      const userDetails = {
      name,
      phone,
      email,
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    navigate('/second');
  }
  };

  return (
    
    <div>
        <form onSubmit={handleSubmit}>

            <Box 
            display="flex" flexDirection={'column'} maxWidth={300} alignItems={"center"}
            justifyContent={'center'}
            margin={'25rem'}
            marginTop={3}
            padding={10}
            borderRadius={5}
            boxShadow={'5px 5px 10px #ccc'}
            color={'whitesmoke'}
            >
                <Typography variant='h1' fontSize={33} padding={3} textAlign={'center'}>Sign-In Page</Typography>
                <TextField margin='normal' style={{backgroundColor:'#354352'}} placeholder='Enter your name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <TextField margin='normal' style={{backgroundColor:'#354352'}} placeholder='Enter your email-id' type='email'value={email} onChange={(e) => setEmail(e.target.value)}/>
                <TextField margin='normal' style={{backgroundColor:'#354352'}} placeholder='Enter your phone-no' type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <Button variant="contained" type='submit'>Sign-In</Button>
            </Box>
        </form>
    </div>
  
  )
}

export default FirsttPage

