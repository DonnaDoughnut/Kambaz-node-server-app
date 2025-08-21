import * as quizzesDao from "./dao.js";
import * as quizzesQuestionsDao from "../QuizzesQuestions/dao.js";
export default function QuizRoutes(app) {
    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates); 
        res.send(status); });
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status); });
    app.post("/api/quizzes/:quizId/questions/:questionId", async (req, res) => {
        const { quizId } = req.params;
        const question = { ...req.body, quiz: quizId };
        const newQuestion = await quizzesQuestionsDao.createQuestion(question);
        res.send(newQuestion); });
    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await quizzesQuestionsDao.findQuestionsForQuiz(quizId);
        res.json(questions); });
    app.get("/api/quizzes/:quizId/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const status = await quizzesQuestionsDao.findQuestionById(questionId);
        res.json(status); });
    
} 