const express = require("express");
const router = express.Router();
const divilo = require("../services/diviloClient");

// Listado de sectores
router.get("/", async (req, res) => {
    try {
        const response = await divilo.get("/acquiring-management/list-sectors");
        res.json(response.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Error consultando sectores" });
    }
});

module.exports = router;
