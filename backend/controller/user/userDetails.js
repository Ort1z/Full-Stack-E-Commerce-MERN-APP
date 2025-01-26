import { findById } from "../../models/userModel"

async function userDetailsController(req,res){
    try{
        const userId = req.userId;
        if (!userId) {
            return res.status(400).json({
                message: "User ID is required",
                error: true,
                success: false
            });
        }
        console.log("userId", userId);
        const user = await findById(userId);

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })

        console.log("user",user)

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

export default userDetailsController