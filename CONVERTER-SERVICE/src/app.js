const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = process.env.PORT || 8080;

app.use("/files", require("./routes/files.routes"));

app.listen(port, () => console.log(`Example app listening at ${port}`));
