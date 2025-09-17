const express = require("express");
const router = express.Router();
const divilo = require("../services/diviloClient");

// Alta de comercio
router.post("/", async (req, res) => {
    try {
        const response = await divilo.post("/acquiring-management/create-commerce", req.body);
        res.json(response.data || { message: "Comercio creado (pendiente de activación)" });
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Error creando comercio" });
    }
});

module.exports = router;
