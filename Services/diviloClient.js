const axios = require("axios");
require("dotenv").config();

const divilo = axios.create({
    baseURL: process.env.DIVILO_API,
    headers: {
        "Authorization": `Bearer ${process.env.DIVILO_TOKEN}`,
        "Content-Type": "application/json"
    }
});

module.exports = divilo;