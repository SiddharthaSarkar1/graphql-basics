import { Course } from "../models/courseModel.js";
import { Lecture } from "../models/lectureModel.js";
export const getAllCourses = async () => {
    const courses = await Course.find();
    console.log("courses", courses);
    return courses;
};
export const getCourseById = async (parent, args) => {
    const course = await Course.findById(args.id);
    console.log("course", course);
    return course;
};
export const getAllLectures = async (parent, args) => {
    const lectures = await Lecture.find();
    console.log("lectures", lectures);
    return lectures;
};
