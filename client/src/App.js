import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Login';
import Header from './Header';
import Home from './Home'



function App() {
  return (
    <>
    
    <Router>
    <Header/>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<Signin />} />
                </Routes>
        </Router></>
    
    
  );
}

export default App;
