const axios = require ('axios');
const url = "https://rickandmortyapi.com/api/character/";


const getCharById = async (req, res) => {

    try {
        const { id } = req.params; 
        const { data } = await axios (`${url}/${id}`)

        if(!data.name) throw new Error (`ID: ${id} Not found`);

        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender, 
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
            }
    
        return res.status(200).json(character)
          
    }

    catch (error) {
        error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    } 
}

module.exports = {
    getCharById
}
