
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
   let EMAIL = 'dmroa@gmail.com';
   let PASSWORD = '0226abc'
   

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => 
         character.id !== Number(id))
      
         setCharacters (charactersFiltered)
   }

   function random() {
      let randomId = Math.floor(Math.random() * 826);
      console.log(randomId);
      onSearch(randomId);
    }

    const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
    }

    useEffect(() => {
      !access && navigate('/');
      }, [access]);

   return (
      <div className='App'>
         {
            location.pathname !== '/'
            ? <Nav onSearch = {onSearch} random = {random} 
            setAccess = {setAccess} /> : null
         }
         
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
