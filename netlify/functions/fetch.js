const fetch = require("axios");

exports.handler = async (event, context) => {
    try {
        //destructure the input from the user
        const { query } = event.queryStringParameters;
        //fetch the data
        let response = await fetch(`
        ${process.env.FETCHURL}=
        ${process.env.KEY}&q=${query}`)
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
