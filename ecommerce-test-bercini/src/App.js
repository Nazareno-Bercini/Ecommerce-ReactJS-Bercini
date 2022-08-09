
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contacto' element={<Contact />}/>
          <Route path='/productos' element={<Products />}/>
          <Route path='/productos/:id' element={<Detail/>}/>
          <Route path='/category/:category' element = {<ItemListContainer/>} />
          <Route path='/cart' element = {<Checkout/>} />
          <Route path='*' element={<h1>ERROR 404 - Pagina no encontrada</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
