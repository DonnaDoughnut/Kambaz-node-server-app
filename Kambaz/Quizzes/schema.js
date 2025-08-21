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
        type: { type: String, 
                enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"], default: "Graded Quiz" },
        assignment_group: { type: String, 
                            enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECTS"], default: "QUIZZES"},
        shuffle_answer: { type: Boolean, default: true},
        time_limit: { type: Number, default: 20},
        multiple_attempts: { type: Boolean, default: true},
        attempts_times: { type: Number, default: 1},
        display_answers: { type: String, default: "Immediately"},
        access_code: { type: String, default: null, trim: true, uppercase: true, match: /[A-Z0-9-]{4,12}$/ },
        one_question_at_a_time: { type: Boolean, default: true},
        webcam_required: { type: Boolean, default: false},
        lock_questions_after_answering: { type: Boolean, default: false},
        published: {type: Boolean, default: false},

    },
    { collection: "quizzes" }
);
export default quizSchema;