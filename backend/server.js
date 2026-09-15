const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "..", ".env")
});

const applicationRoutes =
    require("./routes/applicationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    "/api/applications",
    applicationRoutes
);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(
            process.env.PORT || 5000,
            () => {
                console.log("Server running on port 5000");
            }
        );
    })
    .catch((error) => {
        console.error(
            "MongoDB connection failed:",
            error
        );
    });