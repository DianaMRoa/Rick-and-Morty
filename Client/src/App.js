
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
  
function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
   
   const URL = 'http://localhost:3001/rickandmorty/';
   
   const login = async (userData) => {
      const { email, password } = userData;
      try {
         const { data } = await axios (URL + `login?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message);
         
      }      
   }

   function logout() {
      setAccess(false);
      navigate('/');
    }
   
   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
               setCharacters((oldChars) => [...oldChars, data])}

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }  
   }
   
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => 
         character.id !== Number(id))
      
         setCharacters (charactersFiltered)
   }

   return (
      <div className='App'>
            {location.pathname !== '/' && <Nav onSearch = {onSearch} logout = {logout} />}
         
         <Routes>
            <Route path= '/home' element = {<Cards characters={characters} onClose = {onClose}/>}/>
            <Route path= '/about' element = {<About/>}/>
            <Route path= '/Detail/:id' element = {<Detail/>}/>
            <Route path="*" element={<Error />}/>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>        
      </div>
   );
}

export default App;
