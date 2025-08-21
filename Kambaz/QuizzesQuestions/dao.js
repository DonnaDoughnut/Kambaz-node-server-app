import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export function findQuestionsForQuiz(quizId) {
    return model.find({ quiz: quizId }); }
export function findQuestionById(questionId) {
    return model.findById(questionId); };
export function createQuestion(question) {
    const newQuestion = { ...question, _id: uuidv4() };
    return model.create(newQuestion); };
export function updateQuestion(questionId, question) { return model.updateOne({ _id: questionId }, { $set: question }); };
export function deleteQuestion(questionId) { return model.deleteOne({ _id: questionId }); };  
export function deleteQuestionByIds(ids) {
    return model.deleteMany({ _id: { $in: ids }}); };