const express = require("express");

const app = express();

const mainRoutes = require("./routes/mainRoutes");

app.use(express.static("public"));

app.use("/", mainRoutes);

app.listen(3000, () => {

    console.log("Servidor funcionando");

});