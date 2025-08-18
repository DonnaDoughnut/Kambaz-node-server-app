import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.get("/api/assignments", (req, res) => {
        res.json(assignmentsDao.findAllAssignments());
      });
    
      app.post("/api/assignments", (req, res) => {
        const newAssignment = assignmentsDao.createAssignment(req.body);
        res.json(newAssignment);
      });
    
      app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const updated = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.json(updated);
      });
    
      app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        assignmentsDao.deleteAssignment(assignmentId);
        res.sendStatus(200);
      });
} 