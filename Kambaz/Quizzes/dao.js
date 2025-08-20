import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId }); }
export const findQuizzesByPartialName = (courseId, partialName) => {
    const regex  = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
        course: courseId,
        title: { $regex: regex } ,
    });};
export const findQuizById = (quizId) => model.findById(quizId);
export function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: uuidv4() };
    return model.create(newQuiz); }
export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId }); }; 