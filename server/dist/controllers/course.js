import { Course } from "../models/courseModel.js";
export const getAllCourses = async () => {
    const courses = await Course.find();
    console.log("courses", courses);
    return courses;
};
