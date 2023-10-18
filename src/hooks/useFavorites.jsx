import { useState, useEffect } from 'react'
import { axiosClient } from '../axios'
import useLayout from './useLayout'




const useFavorites = () => {

  const [favorites, setFavorites]= useState([]);
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
   const {showLoading, hideLoading} = useLayout();
   

   const getAllFavorites = async () =>{

    showLoading ()
     try {
      const response = await axiosClient.get('/favorites') 
      setFavorites(response.data)
      hideLoading()
     } catch (error){
      console.log(error)
      hideLoading()
     }
   }


   const getAllProducts = async () => {
    showLoading();
    try {
      const response = await axiosClient.get('/products');
      setProducts(response.data);
      hideLoading();
    } catch (error) {
      console.log(error);
      hideLoading();
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {
    setNewProducts(products);
  }, [products]);


  
   const addFavorites = async (id) => {
    showLoading();
    try {
      const product = products.find(product => product.id === id);
      if (product) {
        await axiosClient.post('/favorites', product);
        await getAllFavorites();
        window.alert('Producto agregado a favoritos de manera exitosa!!');
        hideLoading();
      }
    } catch (error) {
      console.log(error);
      hideLoading();
    }
  };

  useEffect(() => {
    getAllFavorites();
  }, []);

 

  const removeFavorites = async (id) => {
    showLoading()
    try {
      await axiosClient.delete(`/favorites/${id}`)
      await getAllFavorites()
    } catch (error) {
      console.log(error)
      hideLoading()
    }
  }
  
  return {
    favorites,
    getAllFavorites,
    addFavorites,
    removeFavorites,
    newProducts
    

  }
}

export default useFavorites
