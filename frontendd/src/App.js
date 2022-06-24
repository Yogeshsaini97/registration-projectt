import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import { Routes,Route, BrowserRouter } from 'react-router-dom'  
import Logout from './components/PrivateComponent';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ShowProducts from './components/ShowProducts';
import Updateproduct from './components/Updateproduct';
import PrivateComponentwo from './components/PrivateComponentwo';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
    <Route element={<PrivateComponent/>}>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/AddProduct" element={<AddProduct/>}/>
    <Route exact path="/ShowProduct" element={<ShowProducts/>}/>
    <Route exact path="/Updateproduct/:_id" element={<Updateproduct/>}/>
    
    </Route>
    
    <Route element={<PrivateComponentwo/>}>
    <Route exact path="/Login" element={<Login/>}/>
    <Route exact path="/Signup" element={<Signup/>}/>

    </Route>
    
    
    
   
    </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
