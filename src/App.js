import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {
  return <>
    <div className="App">
      <NavBar/>
      <ItemListContainer title="¡Bienvenidxs a Electroland!"/>
    </div>
  </>
}

export default App;
