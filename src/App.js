
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Home from './components/paginas/Home';
import Services from './components/paginas/Services';
import Products from './components/paginas/Products';
import SingUp from './components/paginas/SingUp';

function App() {
  return (
    <div className="App">
    <Router>
     <Navbar/>
      <Routes>
       <Route path = '/' element={<Home/>} />
       <Route path ='/services' element={<Services />}/>
       <Route path ='/products' element={<Products />}/>
       <Route path ='/sing-up' element={<SingUp />}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
