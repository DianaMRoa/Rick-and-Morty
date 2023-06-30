import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';


function Card({ onClose, id, name, status, species, gender, origin, image, addFav, removeFav, myFavorites }) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false); 
         removeFav (id);
      }
      else{
         setIsFav (true);
         addFav ({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className = {style.conteiner} >
          <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
          <button onClick={() => onClose(id)} className = {style.button}>X</button>

         <Link to = {`/detail/${id}`}>
            <h2 className = {style.name}>{name}</h2>
         </Link>
                
            <h2 className = {style.prop}>{status}</h2>
            <h2 className = {style.prop}>{species}</h2>
            <h2 className = {style.prop}>{gender}</h2>
            <h2 className = {style.prop}>{origin}</h2>
            <img className = {style.image} src={image} alt='' />
               
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return{
       addFav: (character) => {dispatch(addFav(character))},
       removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps 
)(Card);
