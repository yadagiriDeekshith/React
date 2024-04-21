import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Form(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

const [errors,setErrors]=useState({});
const handleChange=(e)=>{
  const{name,value}=e.target;
  let error={ ...Box.errors};

  if(name === 'name'){
    if(/\d/.test(value)){
      error[name]='Name cannot contain a number';
    }
  }else{
    delete error[name]
  }

  //for email
  if(name === 'email'){
    if(!value.endsWith('@gmail.com')){
      error[name]="Enter a valid mail Id";
     }else{
      delete error[name];
     }
  }
//contact logic
  if(name==="contact"){
    if(!/^\d+$/.test(value)){
      error[name]="Contact must contain Numbers only";
    }else{
      delete error[name];
    }
  }

//password logic
 if(name === "confirmPassword"){
  if(value !== formData.password){
    error[name]="Password donot match";
  }else{
    delete error[name];
  }
 }
 setErrors(error);
 setFormData({
  ...formData,
  [name]:value
 });

};
const handleSubmit=(e)=>{
  e.preventDefault();
  if(Object.keys(errors).length===0){
    console.log(formData);
  }else{
    console.error('Form Validation Failed:',errors);
  }
};

  return(
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ width: '100%', maxWidth: 500, backgroundColor: "white", padding: 3 , borderRadius: 10}}>
      <Typography variant="h4" color="primary" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          required
          id="email"
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          required
          id="contact"
          name="contact"
          label="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.contact}
          helperText={errors.contact}
        />
        <TextField
          required
          id="password"
          name="password"
          type="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      </Box>
    </Box>
  );
}
export default Form;
