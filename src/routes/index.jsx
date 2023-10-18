import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from '../pages/Home';
import AddProduct from '../pages/AddProduct';
import Favorites from '../pages/Favorites';
import ProductsProvider from '../context/ProductsProvider';

const Path = () => {
  return (
    <>
      <BrowserRouter>
      <ProductsProvider>
        <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path="product/add" element={<AddProduct />}/>
        <Route path="favorites" element={<Favorites />} />
        </Route>
        </Routes>
        </ProductsProvider>
        </BrowserRouter>
    </>

  )
}

export default Path
