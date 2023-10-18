import React, { useContext } from 'react'
import '../App.css'
import Card from '../components/card/Card'
import {ProductContext} from '../context/ProductsProvider'
import { Container } from 'react-bootstrap';

const Favorites = () => {
  const {products, favorites, removeFavorites}  = useContext(ProductContext)

  return (
    <section>
      <h1 className='main'>Favoritos</h1>
      <div className="content d-flex justify-content-center align-items-center center-favorites">
       {favorites.length < 1 ?(
      <Container className="text-center">
          <h1>No se encontraron favoritos...</h1>
        </Container>
       ): (
        
        favorites?.map((favorite) => (    
          <Card 
          key={favorite.id} 
          { ... products.find(product => product.id === favorite.id)} 
          favorites={favorites} 
          removeFavorites={removeFavorites} 
          isFavoriteOnFavoritesPage={true}
          inFavorites={true}
        />
        ))
      )}
      </div>
    </section>
  )
}

export default Favorites
