const express = require("express"); 
const path = require("path"); 
const app = express();
const port = 80;

//Express specific pug
app.use('/static', express.static('static'));//For serving static file
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//Set the views dierectory

//ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`This application started succesfully on port ${port}`);
});