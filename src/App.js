import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Rent from './components/Rent';
import Customized from './components/Customized';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rent' element={<Rent/>}/>
          <Route path="/customize" element={<Customized/>} />
        </Routes>
       
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
