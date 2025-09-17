const express = require("express");
const router = express.Router();
const divilo = require("../services/diviloClient");

// Vinculación de dispositivo
router.post("/bind", async (req, res) => {
    try {
        const response = await divilo.post("/acquiring-management/bind-terminal", req.body);
        res.json(response.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Error vinculando dispositivo" });
    }
});

module.exports = router;
