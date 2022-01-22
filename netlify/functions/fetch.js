import fetch from "node-fetch";
import { config } from "dotenv";
config({ path: './.env' });


// const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';



export function handler(event, context) {
    console.log(event);
    console.log(context);
 return {
     statusCode: 200,
     key: process.env.KEY,
     url: process.env.URL
 }
}
          