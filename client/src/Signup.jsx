import React,{useState} from 'react';
import axios from 'axios';

const Signup=()=>{
    const[form,setForm]=useState({
        username:'',
        email:'',
        contact:'',
        password:'',
        confim:''
    })
    const handleChange = (e) => {
        const {name , value } = e.target;
        setForm({...form , [name] : value});
    }
    const handleSubmit=async()=>{
        if(form.password === form.confirm){ 
        try{
            await axios.post('http://localhost:5000/signup',form)
            .then((res)=>{alert(res.body)})
        }
        catch(error){
            console.log('getting error',error);
        }
    }
    else{
        alert('password and confirm password is not same ');
    }
}

    return(
     <div>
        <div>
            <input type="text" name='username' placeholder='Enter your Name 'onChange={handleChange} />
            <input type="email" name="email" id="email"  placeholder='Enter your Email' onChange={handleChange}/>
            <input type="tel" name="contact" id="contact" placeholder='Enter your Contact Number' onChange={handleChange}/>
            <input type="password" name="password" id="password" placeholder='Enter your Password' onChange={handleChange} />
            <input type="password" name="confirm" id="confirm" placeholder='Enter your Confirm password' onChange={handleChange}  />
            <input type="submit" value="SignUp" onClick={handleSubmit}/>
        </div>
     </div>
    );
}
export default Signup;