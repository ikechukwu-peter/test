const fetch = require("node-fetch");
let dotenv = require("dotenv")
dotenv.config({ path: './.env' });


// const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';



exports.handler =  (event, context) => {
 return {
     statusCode: 200,
     key: process.env.KEY,
     url: process.env.URL
 }
};
          