import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.get("/api/assignments", async (req, res) => {
        res.json( await assignmentsDao.findAllAssignments());
      });
    
      app.post("/api/assignments", async (req, res) => {
        const newAssignment = await assignmentsDao.createAssignment(req.body);
        res.json(newAssignment);
      });
    
      app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const updated = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.json(updated);
      });
    
      app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        await assignmentsDao.deleteAssignment(assignmentId);
        res.sendStatus(200);
      });
} 