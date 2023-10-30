
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Campaigns from './components/Pages/Campaigns/Campaigns';

import SignUpForm from './components/Pages/Signup/SignUpForm';
import Reg from './components/Pages/Registerdetails/Reg';
import ExamD from './components/Pages/ExamsD/ExamD';
import Dropdown from './components/Pages/selectd/selectd';

import Home from './components/Pages/Home/Home';
import HomePage from './HomePage/HomeP/HomeP';
import Selectds from './components/Pages/Selectds/selectds';
import Navigate from './components/Department/HomeD/HomeD';
import LoginD from './components/Department/LoginD/LoginD';




function App() {
 

  return (
    <>
        
    
    
     <BrowserRouter>
       <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<Campaigns/>}/>
            <Route path="/signin" element={""}/>
            <Route path="/signup" element={<SignUpForm/>}/>
            <Route path="/reg" element={<Reg/>}/>
            <Route path="/exam" element={<ExamD/>}/>
            <Route path="/select" element={<Dropdown/>}/>
            <Route path="/cus" element={<Home/>}/>
            <Route path="/ds" element={<Selectds/>}/>
            <Route path="/department" element={<Navigate/>}/>
            <Route path="/LoginD" element={<LoginD/>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
