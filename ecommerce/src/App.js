import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Admin from './Pages/Admin';
import Header from './components/Header';
import Footer from './components/Footer';

function App()
{
return 
(
  <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/products/:productId" element={<ProductDetails/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/admin" element={< Admin/>}/>
    </Routes>
    <Footer/>
  </Router>
);
}

export default App;