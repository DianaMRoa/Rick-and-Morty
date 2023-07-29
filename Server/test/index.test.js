const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe('test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', 
        async () => {
            const response = await request.get('/rickandmorty/character/1');
            const props = [ "id", "name", "species", "gender", "status", "origin", "image" ]
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop);
            });
        });
        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/2345a');
            expect(response.statusCode).toBe(500);
        })
    });

    describe('GET /rickandmorty/login', () => {
        const access = { access: true };
        it('Responde con un objeto con la propiedad access en true si la información del usuario es valida',
        async () => {
            const response = await request.get('/rickandmorty/login?email=dmroa@gmail.com&password=0226abc');
            expect(response.body).toEqual(access);
        });
        
        it('Responde con un objeto con la propiedad access en false si la información del usuario no es valida',
        async () => {
            const { body } = await request.get('/rickandmorty/login?email=dmr@gmail.com&password=0226avz');
            expect(body.access).toFalsy();
        });
    });

    describe('POST /rickandmorty/fav', () => {
        const character1 = {
            id: 1,
            name: 'Franco',
          };
      
          const character2 = {
            id: 2,
            name: 'Nahuel',
          };

        it('Debe guardar el personaje en favoritos', async () => {
            const response = await request.post('/rickandmorty/fav')
            send(character1);

            expect(body).toBeInstanceOf(Array);
            expect(body).toContainEqual(character1);
        });

        it('Si se envía otro personaje, devuelve un array con los anteriores', async () => {
            const { body } = await agent.post('/rickandmorty/fav').send(character2);
      
            expect(body).toBeInstanceOf(Array);
            expect(body).toContainEqual(character1);
            expect(body).toContainEqual(character2);
          });
          describe('DELETE /rickandmorty/fav/:id', () => {
            it('Debe devolver el arreglo sin modificar si no encuentra el ID', async () => {
              const { body } = await agent.delete('/rickandmorty/fav/3');
              expect(body).toBeInstanceOf(Array);
              expect(body).toEqual([
                {
                  id: 1,
                  name: 'Franco',
                },
        
                {
                  id: 2,
                  name: 'Nahuel',
                },
              ]);
            });
        
            it('Elimina correctamente el personaje', async () => {
              const { body } = await agent.delete('/rickandmorty/fav/1');
              expect(body).toBeInstanceOf(Array);
              expect(body).toEqual([
                {
                  id: 2,
                  name: 'Nahuel',
                }
              ])
            })
        });
    });


})