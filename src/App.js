import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './components/Home/Home'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Footer} from './components/Footer/Footer'
import {Productos} from './data/data'
import {ItemDetail} from './components/ItemDetail/ItemDetail'




function App() {
  return( 
    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/category/:idCategory" element={<Home/>}/>
        {/* <Route path="/item-detail-container" element={<ItemDetailContainer/>}/> */}
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>

      </Routes>

      <Footer/>

  </BrowserRouter>
  );
}

export default App;
