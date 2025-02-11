import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import { engine } from "express-handlebars";
import dotenv from "dotenv"
import { fileURLToPath } from 'url';
import compression from "compression";
import path from "path"
dotenv.config();

const app = express();
app.use(cors("*"))
app.use(compression()); // Compress all routes

const PORT = process.env.PORT || 3000
const message = process.env.SECRET_MESSAGE  
const username = process.env.USERNAME 
const password = process.env.PASSWORD
// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var jsonParser = bodyParser.json()
// Set up Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'html'));
app.get("/",(req,res)=>{
    res.render('welcome', {
        username: 'John Doe',
        message: 'This is a dynamic welcome message!',
        features: ['Feature 1', 'Feature 2', 'Feature 3']
    });
})
app.get('/login', (req, res) => {
    res.render('login');
});

app.post("/secrect",jsonParser ,(req,res)=>{
    console.log(req.body);
    if(req.body.password == password && req.body.username == username){
        res.send({ success: true, message: message });
    }else{
        res.send({ success: false, message: 'Invalid username or password' })

    }

} )
app.listen(PORT,()=>{
    console.log("Server is listening on port"+PORT)
})