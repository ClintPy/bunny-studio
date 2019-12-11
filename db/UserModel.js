import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        required: '{PATH} is required!'
    },
    tasks: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Tasks'}
    ]
})

export default mongoose.model('User', UserSchema)