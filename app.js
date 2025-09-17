const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// Importar rutas
app.use("/operations", require("./routes/operations"));
app.use("/devices", require("./routes/devices"));
app.use("/commerces", require("./routes/commerces"));
app.use("/sectors", require("./routes/sectors"));

// Webhook para notificaciones de Divilo
app.post("/webhook/operation", (req, res) => {
    console.log("Webhook recibido:", req.body);
    // aquí guardas en tu BD o disparas la lógica de negocio
    res.status(200).send("OK");
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
