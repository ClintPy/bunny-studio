import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        required: '{PATH} is required!'
    }
})

export default mongoose.model('User', UserSchema)