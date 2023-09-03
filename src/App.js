import './App.css';
import AboutUs from './components/AboutUs';
import Contactus from './components/Contactus';
import Login from './components/Login';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>

<BrowserRouter>
<Navbar title ="TextUtils"/>
<Routes>
  
<Route path="/" element={<TextForm heading="PLease enter your Text below "/>}/>
<Route path="/contact us" element={<Contactus/>}/>
<Route path="/aboutus" element={<AboutUs/>}/>
<Route path="/login" element={<Login/>}/>

</Routes>
</BrowserRouter>



    </>
  );
}

export default App;
