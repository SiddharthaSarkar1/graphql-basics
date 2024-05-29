import { User } from "../models/userModel.js";
export const getAllUsers = async () => {
    const users = await User.find();
    console.log("users", users);
    return users;
};
