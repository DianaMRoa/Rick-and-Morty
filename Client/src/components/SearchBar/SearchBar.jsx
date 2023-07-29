import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({ onSearch, random }) {

   const [characters, setCharacters] = useState([]);
   const [id, setId] = useState('');

   const handleAddCharacter = () => {
      if (characters.some((character) => character.id === id)) {
         alert('El personaje ya está agregado');
         return;
      }
      setCharacters([...characters, { id }]);
      setId('');
   }


   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.container}>
         <input 
            className={style.input} 
            type='search' 
            onChange={handleChange} 
            value={id}
         />
         <button className={style.button} onClick = {() => {onSearch(id); setId(''); handleAddCharacter();}}>
            <span>Agregar</span>    
         </button>
         
      </div>
   );
}

