
import {useState, useEffect} from 'react'
import {axiosClient} from '../axios';
import useLayout from './useLayout';

const useProduct = () => {

const [products, setProducts] = useState([]);
const {showLoading, hideLoading} = useLayout();


const getAllProducts = async () =>{

 showLoading()
  try {
    const response = await axiosClient.get('/products')   /*utilizando directamente el baseURL que contiene el axiosClient */
    setProducts(response.data)                            /*set del array que se encuentra en db.json como valor */
    hideLoading()

  } catch (error) {
    console.log(error)
    hideLoading()
    
  }
}
useEffect(() => {
  getAllProducts()

}, []);

  return {
  products, 
  getAllProducts

  }
}

export default useProduct