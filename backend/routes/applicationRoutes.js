const express = require("express");

const router = express.Router();

const Application =
    require("../models/Application");


router.post("/", async (req, res) => {

    try {

        const {
            name,
            email,
            address,
            department,
            experienceType,
            linkedin
        } = req.body;


        if (
            !name ||
            !email ||
            !address ||
            !department ||
            !experienceType
        ) {

            return res.status(400).json({
                message: "Please fill all required fields"
            });

        }


        const application =
            await Application.create({
                name,
                email,
                address,
                department,
                experienceType,
                linkedin
            });


        res.status(201).json({

            success: true,

            message:
                "Application submitted successfully",

            application

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message:
                "Something went wrong"

        });

    }

});


module.exports = router;