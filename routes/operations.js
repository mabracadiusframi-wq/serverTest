const express = require("express");
const router = express.Router();
const divilo = require("../services/diviloClient");

// Listar operaciones
router.get("/", async (req, res) => {
    try {
        const { commerceNumber, fromDate, toDate } = req.query;
        const response = await divilo.get("/acquiring-management/list-operations", {
            params: { commerceNumber, fromDate, toDate }
        });
        res.json(response.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Error consultando operaciones" });
    }
});

module.exports = router;