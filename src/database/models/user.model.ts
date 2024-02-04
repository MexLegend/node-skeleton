import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate';
import { IUserResponse } from "../../interfaces/user.interface";

const UserSchema = new Schema<IUserResponse>(
    {
        name: {
            type: String,
            required: [true, 'Name field is required'],
        },
        age: {
            type: Number,
            required: [true, 'Age field is required'],
        },
        email: {
            type: String,
            required: [true, 'Email field is required'],
            index: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            minLength: [8, 'The password must have at least 8 characters'],
            required: [true, 'Password field is required']
        }
    },
    {
        timestamps: true,
        versionKey: false
    });

// UserSchema.methods.toJSON = function () {
//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.password;

//     return userObject;
// };

UserSchema.plugin(mongoosePaginate);
export default model<IUserResponse>('Users', UserSchema);