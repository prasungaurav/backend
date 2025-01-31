import './home.css';
import React from 'react';
import axios from 'axios';

function Home(){
    const handleSubmit=async()=>{
        await axios.post('http://localhost:5000/home')}
    return(
     <h1>hello world </h1>
    )}
    export default Home;