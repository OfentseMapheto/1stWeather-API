const express = require("express");
const bodyParser = require("body-parser");
const fetch = require('node-fetch');

const app = express();

let finalZip
let finalURL
let units

function CreateAPICall(zip, unitType)
{
  units = unitType
  let url1 = "http://api.openweathermap.org/data/2.5/weather?zip="
  let url2 = `,za&units=${units}&appid=f300919b67b5f24a743dcf6ffba4edec`
  //some existing zips: 2094, 1541
  finalZip = zip //This is needed to pass the zip over to the weather view in the front end
  finalURL = url1 + zip + url2
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/callWeatherAPI", (req, res) => {

  APIStuff(res)

})

async function APIStuff(res)  //This function is used to call the api and process the data gained from it
  {
    let response = await fetch(finalURL);
    let locationData = await response.json();

    res.send({locationData, finalZip, units})
  }

  //This code checks "/zipPost" for a zip to be sent (from front end), and then the zip can be sent to the API
app.post("/zipPost", (req, res) => {
    CreateAPICall(req.body["zip"], req.body["unit"])
    res.redirect("/weather")
})

  //hosting the web server
app.listen(8080,() => {
  console.log("Started on PORT 8080");
})