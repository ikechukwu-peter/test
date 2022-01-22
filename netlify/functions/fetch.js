const fetch = require("axios");

exports.handler = async (event, context) => {
    console.log(event);
    console.log(context);
    try {
        const { query } = event.queryStringParameters;
        let response = await fetch(`${process.env.FETCHURL}=${process.env.KEY}&q=${query}`)
        let weatherData = response.data
        return {
            statusCode: 200,
            body: JSON.stringify({
                weatherData
            })
        };


    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                status: "fail",
                message: error.message
            })

        }
    }

}
