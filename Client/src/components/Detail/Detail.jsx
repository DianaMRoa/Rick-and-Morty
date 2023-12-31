import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Detail = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           }
        })
        .catch((error) => window.alert(error.response.data.error));

        return setCharacter({});
     }, [id]);


    return (
        <div>
            
            <h2>{character?.name}</h2> 
            <h2>{character?.status}</h2> 
            <h2>{character?.gender}</h2> 
            <h2>{character?.origin?.name}</h2> 
            <img src= {character?.image} alt={character?.name} /> 
            
        </div>
    )
}

export default Detail;