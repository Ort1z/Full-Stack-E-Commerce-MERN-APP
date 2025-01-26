import bcrypt from 'bcryptjs';
import userModel from '../../models/userModel';
import jwt from 'jsonwebtoken';

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            res.status(404).json({
                message: "User not found, redirecting to signup page",
                redirect: "/signup",
                error: true,
                success: false,
            });
            return;
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        console.log("checkPassword", checkPassword);

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            };
            const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

            const tokenOption = {
                httpOnly: true,
                secure: true,
            };

            res.cookie("token", token, tokenOption).status(200).json({
                message: "Login successfully",
                data: token,
                success: true,
                error: false,
            });

        } else {
            throw new Error("Please check Password");
        }

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;