import mongoose, { Schema } from 'mongoose';
const lectureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    resources: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: false
    },
    isPreview: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});
export const Lecture = mongoose.model('Lecture', lectureSchema);
