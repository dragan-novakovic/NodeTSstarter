import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },

    password: String
})

const User = mongoose.model("User", UserSchema)
export default User