
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Bienvenido a Camisetas Bercini</h1>
      <div className='container-products'>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
