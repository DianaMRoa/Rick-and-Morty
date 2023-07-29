import { connect } from "react-redux"
import Card from "../Card/Card"
import { useDispatch } from "react-redux"
import { orderCards, filterCards } from "../../redux/actions"
import { useState } from "react"

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
        setAux({
            ...aux,
            [event.target.value]: ![event.target.value]
        })
    }

    return(
        <>
         <select onChange={handleOrder}>
            <option value='A'>Ascendente</option>
            <option value='D'>Descendente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">allCharacters</option>
        </select>

        {
            myFavorites?.map(fav => {
                return (
                    <Card
                    key = {fav.id}
                    id = {fav.id}
                    name = {fav.name}
                    status = {fav.status}
                    species = {fav.species}
                    gender = {fav.gender}
                    image = {fav.image}
                    origin = {fav.origin?.name}
                    onClose={fav.onClose}
                    />
                )
            })
        }
       
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps, 
    null 
)(Favorites);
