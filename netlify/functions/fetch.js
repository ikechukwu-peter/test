// import fetch from "node-fetch";
// import { config } from "dotenv";
// config({ path: './.env' });


// const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';



exports.handler = async (event, context) => {
    console.log(event);
    console.log(context);
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Hello World", key: process.env.KEY,
                url: process.env.URL
            }),

        }
    } catch (error) {
        return {
            statusCode: 500,
            message: "Failed"
        }
    }

}
