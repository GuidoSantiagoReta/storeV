import React from "react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import './Card.css';
import {isItemExist} from "../../helper"

const Card = (props) => {

    const {id,name,image, price, favorites, addFavorites,isFavoriteOnFavoritesPage, removeFavorites } = props;

  return (
    <>
   
   <div className="product-container" >

        <h4>{name}</h4>
        <img src={image}/>
        <h2 className="price">{price}</h2>
        <button className="bt-add">Agregar</button>  

        <div className="px-2">

          {
          isFavoriteOnFavoritesPage && isItemExist(id,favorites)
          ? (<span onClick={()=> removeFavorites(id)} role={'button'} className="fs-4 "><AiFillHeart/></span>) 
          : (<span onClick={()=> addFavorites(id)} role={'button'} className="fs-4 "><AiOutlineHeart/></span>)
          }
          
        
        </div>

      </div>
      
   </>
  );
};

export default Card;
