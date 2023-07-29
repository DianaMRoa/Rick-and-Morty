import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, random, setAccess }) => {    

    const handleLogOut = () => {
        setAccess (false);
    }

    return (
        <nav>
            <SearchBar 
            onSearch = {onSearch} random = {random} />
            
            <button >
            <Link to = '/about'>About</Link>
            </button>

            <button >
            <Link to = '/home'>Home</Link>
            </button>

            <button onClick={handleLogOut}>LOG OUT</button>

            <button onClick={() => random}> 
            Aleatorio
            </button>

            <button >
            <Link to = '/favorites'>Favorites</Link>
            </button>
            
        </nav>
)}

export default Nav;