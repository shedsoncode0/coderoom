import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cartigory: {
        type: String,
        required: true,
    },
    cartigory: {
        type: Array,
        required: true,
    },
}, {timesStamps: true});

export default mongoose.model("Project", ProjectSchema);