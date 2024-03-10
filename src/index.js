const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
// Initialize
const app = express();

//Setings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('views engine', 'hbs');

//Midlewares 
app.use(express.urlencoded({extended: false}));
//Global Variables

//Routes

// Static Files

//Server is listening 
app.listen(app.get('port'), () => {
    console.log('listening on port ' , app.get('port'));
});