import * as questionsDao from "./dao.js";
export default function QuestionsRoutes(app) {
    app.post("/api/questions/bulk-delete", async (req, res) => {
        const { questionsId } = req.body;
        const result = await questionsDao.deleteQuestionByIds(questionsId);
        res.json(result) 
    });
    app.delete("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const status = await questionsDao.deleteQuestion(questionId);
        res.send(status); });
}