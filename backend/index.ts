import express from 'express';
import cors from 'cors';
import workout from './routes/Workout.route';
import user from './routes/User.route';
import userAuth from './middleware/auth.middleware';
import db from './config/db';
import nutrition from './routes/Nutition.route';
const app = express();
const port = 8080;

// json
app.use(express.json());

// cors
app.use(cors());


// auth
app.use('/workout',userAuth);
// workout route
app.use('/workout',workout);



// auth
app.use('/nutrition',userAuth);
// nutrition route
app.use('/nutrition',nutrition);

// user
app.use('/user',user);



app.listen(port, async() => {
    try {
        await db;
        console.log('db is connected');
    } catch (error) {
        console.log('failed to connect the db');
    }
  console.log(`Express is listening at ${port}`);
});