import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        course: { type: String, ref: "CourseModel" },
        points: Number,
        start_date: String, 
        end_date: String,
        due_date: String,
        questions: Number,
    },
    { collection: "quizzes" }
);
export default quizSchema;