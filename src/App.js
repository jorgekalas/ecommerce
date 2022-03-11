import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './components/Home/Home'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Footer} from './components/Footer/Footer'
import {CartContext} from './context/CartContext'
import {CartProvider} from './context/CartContext'
import {CartContainer} from './components/CartContainer/CartContainer'
import {Success} from './components/Success/Success'



function App() {
  return( 
    <CartProvider>
    {/* <CartContext.Provider value={[]}> */}
    
      <BrowserRouter>
        <NavBar/>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/category/:idCategory" element={<Home/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/success" element={<Success/>}/>

          </Routes>
          <Footer/>

        </BrowserRouter>

      {/* </CartContext.Provider> */}
      </CartProvider>

  );
}

export default App;
