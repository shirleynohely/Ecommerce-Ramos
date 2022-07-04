import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  greeting={"Ecommerce Alsedo Lorenzo e Hijos"}
                />
              }
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer
                  greeting={"Ecommerce Alsedo Lorenzo e Hijos"}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Form />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Toaster />
          <Footer />
        </BrowserRouter>
        
      </CartContextProvider>
    </div>
  );
}

export default App;
