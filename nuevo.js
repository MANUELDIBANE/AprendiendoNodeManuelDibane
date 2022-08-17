const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
app.listen(PORT, ()=>{
    console.log (`ejecuantando la app de  adsi AM ${PORT}`)
});
app.set('views',path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(express.static('src/statics'));

//ARRIBA VAN LA CONFIGURACIONES 
/*/app.get("/",(req, res)=> {  
    res.send("bienvenido a este software");
})
/*/
/*
app.get("/about",(req, res)=>{
    res.send("about this app");
})
*/ 

//ACA ABAJO LOS MEOTODOS 

app.get('/Register',(req, res)=> {
    res.render('pages/register');
})
app.get("/",(req, res)=> { 
    res.render('pages/index');
})

app.get("/error",(req, res)=>{
    res.render('pages/error');
})

app.get('/listar',function(req, res) {
       var mascots = [
        { name: 'Manuel', group: "1683453", year: 2012},
        { name: 'urrutia', group: "6531842", year: 1996},
        { name: 'Moby Dock', group: "215767", year: 2013}
    ];
    var tagline = "ADSI jornada Mañana";
    
    res.render('pages/listar', {
        mascots: mascots,
        tagline: tagline
    });
});
