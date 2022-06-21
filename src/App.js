import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContextProvider} from './Context/CartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Alsedo Lorenzo e Hijos"}/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
