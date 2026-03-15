import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: "customer"
    },
    profilePicture: {
        type: String,
        default: "https://www.google.com/imgres?q=icon%20user%20freepik&imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2F3d-simple-user-icon-isolated_169241-6922.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser&docid=QcbS1PLi7f2NDM&tbnid=N-1nUUS6sFClVM&vet=12ahUKEwiQ0IyplKKTAxWC1jQHHQbQOyQQnPAOegQIFRAB..i&w=740&h=740&hcb=2&ved=2ahUKEwiQ0IyplKKTAxWC1jQHHQbQOyQQnPAOegQIFRAB"
    }
})

const User = mongoose.model("users", userSchema);
export default User;