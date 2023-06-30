
const validation = (userData) => {
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = 'email invalido';
    } 
    if(!userData.email){
        errors.email = 'debe ingresar un email';
    }
    if(userData.email.length > 35){
        errors.email = 'El email debe contener maximo 35 caracteres';
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'Debe contener al menos un número'
    }
    if(userData.password.length < 6 || userData.password.length>10 ){
        errors.password = 'El password debe contener entre 6 y 10 caracteres'
        }
   return errors;
}

export default validation;
