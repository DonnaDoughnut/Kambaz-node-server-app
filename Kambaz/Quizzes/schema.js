import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        course: { type: String, ref: "CourseModel" },
        points: Number,
        start_date: Date, 
        end_date: Date,
        due_date: Date,
        questions: Number,
    },
    { collection: "quizzes" }
);
export default quizSchema;