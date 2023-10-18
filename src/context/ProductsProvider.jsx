import React, {createContext} from "react";
import useLayout from "../hooks/useLayout";
import useFavorites from "../hooks/useFavorites";
import useProduct from "../hooks/useProduct";
import { useEffect } from "react";

export const ProductContext = createContext('')





const ProductsProvider = ({ children }) => {

const {loading}  = useLayout()
const {products, getAllProducts} = useProduct();
const {favorites, getAllFavorites,addFavorites, removeFavorites} = useFavorites();

useEffect(() => {
  getAllProducts()
  getAllFavorites()
  
}, []);


  return (
    <ProductContext.Provider value={{loading, products,favorites, getAllFavorites, getAllProducts, addFavorites, removeFavorites}}>{children}</ProductContext.Provider>
  );
};

export default ProductsProvider;
