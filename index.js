import express from 'express';
import { createCar, getAllCars, updateCar } from './src/cars.js';

const app = express();
const PORT = 3002;
app.use(express.json());

//put our routes here
// app.get('/', (req, res) => {
//     res.send('Express is working! 😁');
// })

app.get('/cars', getAllCars); 
app.post('/cars', createCar)
app.patch('/cars/:id', updateCar)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`);
});


