import React, { useState, useContext } from 'react'
import '../App.css'
import Card from '../components/card/Card'
import {ProductContext} from '../context/ProductsProvider'
import ProductSearch from '../components/productsearch/ProductSearch'

const Home = () => {
  const {products, favorites, addFavorites,  removeFavorites} = useContext(ProductContext)
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
   setSearchTerm(term);
 };

  return (
   <section>
    <h1 className='main'>Home</h1>
    <div className="d-flex justify-content-center w-100 mt-3">
    <ProductSearch onSearch={handleSearch}/>
    </div>
    <div className="content">
    {products?.filter(product => searchTerm === "" || product.name.toLowerCase().startsWith
    (searchTerm.toLowerCase())).map((product)=>(    
    <Card  
    key={product.id} 
    { ... product} favorites={favorites}  
    addFavorites={addFavorites}
    removeFavorites={removeFavorites}
  />
 ))}
 </div>
 
    </section>
   
  )
}

export default Home
