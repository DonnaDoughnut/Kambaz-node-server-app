import model from "./model.js";
export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId }); }
export const findQuizzesByPartialName = (courseId, partialName) => {
    const regex  = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
        course: courseId,
        title: { $regex: regex } ,
    });
}