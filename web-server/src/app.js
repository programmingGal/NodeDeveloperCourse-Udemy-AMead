const path = require ('path') // built in module
const express = require ('express')
const hbs = require ('hbs')
const geocode = require('../src/utils/geocode')
const forecast = require('../src/utils/forecast')


// 2 variables node provides:
//console.log(__dirname)
//console.log(__filename)

//console.log(path.join(__dirname , '../public'))

// create an express application
const app = express()

//attaches my express obj to the path of the public folder. so don't need app.get()
// so localhost:3000 goes to index.html, or can specify another page in public
const publicDirectoryPath = path.join(__dirname , '../public')

// if u want to change folder name of where u store .hbs files, do this:
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

// setup static (not changing) directory to serve: 
app.use(express.static(publicDirectoryPath))

 // dynamic with handlebars
 // pass in to render 1)name of hbs page 2) dynamic attributes
app.set('view engine', 'hbs') // sets the view engine to hbs - we install hbs and can use w/o require
app.get('', (req,res)=> {
    res.render('index', {
        title: 'Weather App',
        name: 'Adina'
    })
})

// get takes route (here '' for root page) and what to do with req - request, and what to do with res
//localhost:3000 - index.html or index.hbs
app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>') // renders it to the browser
})

// //localhost:3000/help.html -  help.html for static html help page)
// app.get('/help',(req,res)=> {
//     res.send({               //sends objects or [] of objects as json
//        name: 'Andrew', 
//        age: 27
//     })
// })

// localhost:3000/help - dynamic hbs help page
app.get('/help',(req,res)=> {
    res.render('help', {
        title: 'help',
        name: 'Adina',
        helpMessage: 'click here for more info' 
       
    })
})

app.get('/about',(req,res)=> {
    res.render ('About', {
        title: 'About me',
        name: 'Adina'
   })
})

app.get('/weather',(req,res)=> {
    if(!req.query.address){
        return res.send({
            error: 'Please enter an address'
        })
    }
    res.send({
        forecast: 'It is 50 degrees.',
        address: req.query.address
    })
})

// ex. http://localhost:3000/products?search=games
app.get('/products', (req, res) => {
    console.log(req.query) // prints out the search query values passed in with the request ex. 
    
    // if u want to make it required to have a search term
    if(!req.query.search){

        // need return so doesn't call res.send() again below (which will throw an error)
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req,res) => {
    res.render ('404error',{
        title: '404',
        name: 'Adina',
        errorMessage: 'Help article not Found.'
    })
})

// use * wildcard for any routes that are not set up yet - for anything funny the user tries
// wildcard should be last, cuz express will look thru ur list of get() calls
app.get('*', (req,res) => {
    res.render ('404error',{
        title: '404',
        name: 'Adina',
        errorMessage: 'Page not Found.'
    })
})

//app.com - root page of app
// app.com/help

// start the server (asynchronous process). pass in port and message
// runs in browser on localhost:3000
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})