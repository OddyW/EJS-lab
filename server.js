// imports
const express = require("express") //importing express package
const app = express() // creates a express application

const restaurants = require('./data')










app.use(express.static('public')); //all static files are in the public folder




console.log(restaurants[0].menu)

// Routes go here

app.get('/', (req, res)=>{
    //render is for ejs rendering
    res.render('homepage.ejs')
})


app.get('/restaurants',(req,res)=>{
    res.render('all-restaurants.ejs',{restaurants: restaurants})
})


app.get('/restaurants/:restaurantId',(req,res)=>{
  console.log(req.params.restaurantId)

  const foundRestaurant = restaurants.find((oneRestaurant)=>{
    return oneRestaurant.id === Number(req.params.restaurantId)
  })
  console.log(foundRestaurant)
  res.render('restaurants/restaurants-details.ejs', {restaurants: foundRestaurant})
})





app.listen(4000,()=>{
    console.log("Listening on port " + 4000)
}) // Listen on port 4000


