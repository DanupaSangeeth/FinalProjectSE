
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Campaigns from './components/Pages/Campaigns/Campaigns';
import Home from './components/Pages/Home/Home';
import SignUpForm from './components/Pages/Signup/SignUpForm';
import Reg from './components/Pages/Registerdetails/Reg';
import ExamD from './components/Pages/ExamsD/ExamD';


function App() {
 

  return (
    <>
        
    
    
     <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Campaigns/>}/>
            <Route path="/signin" element={""}/>
            <Route path="/signup" element={<SignUpForm/>}/>
            <Route path="/reg" element={<Reg/>}/>
            <Route path="/exam" element={<ExamD/>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
