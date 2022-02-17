import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {ItemDetail} from './components/ItemDetail/ItemDetail'


function App() {
  return <>
    <div className="App">

      <NavBar/>
      <ItemListContainer title="¡Bienvenidxs a Electroland!"/>
      <ItemDetailContainer/>
      
    </div>
  </>
}

export default App;
