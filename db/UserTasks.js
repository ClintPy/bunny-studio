import mongoose from "mongoose";

const UserTacks = mongoose.Schema({
    description: {
        type: String,
        required: '{PATH} is required'
    },
    state: {
        type: { todo: String, done: String},
        required: '{PATH} is required'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
})

export default mongoose.model('Tasks', UserTacks)