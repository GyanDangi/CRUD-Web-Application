import { useState } from "react";
import { FormControl, FormGroup, Input, InputLabel, Typography ,styled,Button} from "@mui/material";

import {addUser} from '../services/api';

const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &> div{
        margin-top:20px;
    }
`;

const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
}

const Adduser = () => {

    const [user, setUser] =useState(defaultValue);

    const onValueChange= (e) =>{
        console.log(e.target.name, e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }

    const addUserDetails = async () =>{
      await addUser(user);
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)}name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default Adduser;