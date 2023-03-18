import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        default: "",
    },
    username: {
        type: String,
        unique: true,
        default: "",
    },
    email: {
        type: String,
        required: true,
        unique: true,
        default: "",
    },
    password: {
        type: String,
        required: true,
        default: "",
        min: 6,
    },
    followers: {
        type: Array,
        default: [],
    },
    following: {
        type: Array,
        default: [],
    },
    bio: {
        type: String,
        default: "",
    },
    profileImage: {
        type: String,
        default: "",
    },
    coverImage: {
        type: String,
        default: "",
    },
    instagramLink: {
        type: String,
        default: "",
    },
    twitterLink: {
        type: String,
        default: "",
    },
    githubLink: {
        type: String,
        default: "",
    },
},{timestamps: true});

export default mongoose.model('User', UserSchema);