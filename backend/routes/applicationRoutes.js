const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

router.post("/", async (req, res) => {
    try {
        console.log("Received application:");
        console.log(req.body);

        const {
            name,
            email,
            phone,
            address,
            department,
            experienceType,
            resume,
            linkedin
        } = req.body;

        if (
            !name ||
            !email ||
            !phone ||
            !address ||
            !department ||
            !experienceType ||
            !resume
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });
        }

        const application = await Application.create({
            name,
            email,
            phone,
            address,
            department,
            experienceType,
            resume,
            linkedin
        });

        console.log("Application saved:", application._id);

        res.status(201).json({
            success: true,
            message: "Application submitted successfully"
        });

    } catch (error) {
        console.error("APPLICATION ERROR:");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;