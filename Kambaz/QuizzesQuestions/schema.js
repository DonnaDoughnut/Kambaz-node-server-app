import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        points: Number,
        type: { type: String, 
                enum: ["Multiple Choice", "True/False", "Fill in the Blank"], default: "Multiple Choice" },
        published: {type: Boolean, default: false},
        quiz: { type: String, ref: "QuizModel" },
        answers: {type: [String], default: ["", ""],}

    },
    { timestamps: true }
);
export default questionSchema;