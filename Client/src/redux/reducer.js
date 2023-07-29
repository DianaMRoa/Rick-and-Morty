import { removeFav, addFav } from "./actions";
import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload, 
                allCharactersFav: action.payload
            }
        
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload, 
                allCharactersFav: action.payload
            }    

        case FILTER:
            const allCharactersFilter = state.allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: 
                    action.payload === 'allCharacters'
                    ? [...state.allCharacters]
                    : allCharactersFilter
            }
        
        case ORDER:
            const allCharactersOrder = [...state.allCharacters]
            return {
                ...state,
                myFavorites: 
                    action.payload === 'A'
                    ? allCharactersOrder.sort((a, b) => a.id - b.id)
                    : allCharactersOrder.sort((a, b) => b.id - a.id)

            }
               
        default:
            return {...state}
    }
}

export default reducer;

