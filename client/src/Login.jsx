import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signin=()=>{
  const navigate = useNavigate();
    const [form,setForm]=useState({
       email:'',
       password:''
    })

    const handleChange=(e)=>{
      const{name,value}=e.target
      setForm({...form , [name] : value});
    }
    const handleSubmit=async()=>{
       const res=await axios.post('http://localhost:5000/login',form )
       if (res && res.data) {
        alert(res.data.message);
        if (res.data.sessionId) {
            navigate('/home');
        } else {
            alert('Login failed: Session ID not found.');
        }
    } else {
        // Handle case where response is missing expected data
        alert('Unexpected server response.');
    }
    }
    return(
      <div>
        <div>
            <input type="email" name="email" id="email"  placeholder='Enter your Email' onChange={handleChange}/>
            <input type="password" name="password" id="password" placeholder='Enter your Password' onChange={handleChange} />
            <input type="submit" value="SigIn" onClick={handleSubmit}/>
        </div>
      </div>
    )}
export default Signin; 