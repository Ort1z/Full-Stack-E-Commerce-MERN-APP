import userModel from "../../models/userModel";
import { genSaltSync, hashSync } from 'bcryptjs';

async function userSignUpController(req, res) {
    try {
        const { email, password, name, profilePic } = req.body;

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }
        if (!name) {
            throw new Error("Please provide name");
        }

        const user = await userModel.findOne({ email });

        if (user) {
            throw new Error("User already exists.");
        }

        const salt = genSaltSync(10);
        const hashPassword = hashSync(password, salt);

        const payload = {
            email,
            name,
            role: "GENERAL",
            password: hashPassword,
            profilePic
        };

        const userData = new userModel(payload);
        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully!"
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

export default userSignUpController;
