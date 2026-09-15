const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        address: {
            type: String,
            required: true,
            trim: true
        },

        department: {
            type: String,
            required: true
        },

        experienceType: {
            type: String,
            enum: ["Fresher", "Experienced"],
            required: true
        },

        linkedin: {
            type: String,
            trim: true
        }
    },

    {
        timestamps: true
    }
);

module.exports =
    mongoose.model("Application", applicationSchema);