
import { useState } from 'react';
import validation from './Validation';

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
        setErrors (
            validation ({
              ...userData,
              [event.target.name]: event.target.value,
            }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login (userData);
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input 
                type="email" 
                name="email"
                value={userData.email}
                placeholder='Ingresa el email...'
                onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password"> Password: </label>
            <input 
                type="password"
                name="password"
                value={userData.password} 
                placeholder='Ingresa la password...'
                onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}

            <button>Submit</button>
        </form>
    )
}

export default Form;