import User from "../models/UserModel.js";

/**
 * @description register User
 * @route POST /api/auth/register
 * @access Public
 */
const register = async (req, res) => {
    // Getting the user details from the request body
    const {
        fullname,
        email,
        password,
    } = req.body;

    // Checking for empty details
    if ( !fullname || !email || !password ) {
        res.status(401)
            .json({error: "Make sure all fileds are inputed with value"})
        return;
    }

    // Check if Email already exist in the database
    const emailExit = await User.findOne({ email });
    if (emailExit) {
        res.status(400)
            .json({error: "Email already exist"})
        return;
    } 

    // Create a new user
    const user = new User({
        fullname,
        email,
        password,
    });

    // Save the user to the database and check for any error
    try {
        const newUser = await user.save();
        res.status(201).json({
            newUser
        });
    } catch (error) {
        res.status(500)
            .json(error);
    }
}

/**
 * @description Login User
 * @route POST /api/auth/login
 * @access Public
 */
const login = async (req, res) => {
     // Getting the user details from the request body
     const {
        email,
        password,
    } = req.body;

    // Checking for empty details
    if (!email || !password ) {
        res.status(401)
            .json({error: "Make sure all fileds are inputed with value"})
        return;
    }

    try {
        // Check if Email already exist in the database
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400)
                .json({error: "User not found"})
            return;
        } 

        res.status(200)
            .json({user})
        
    } catch (error) {
        res.status(500)
            .json(error);
    }
}


/**
 * @description Delete User
 * @route DELETE /api/auth/login
 * @access Public
 */
const deleteAccount = async (req, res) => {
    // Get the user id from request params
    const { id } = req.params;
   
    //Checking if the user exist
    const user = await User.findById(id);
    if (!user) {
        res.status(400)
            .json({error: "User not found"})
        return;
    } 

    // Deleting the user
    const deletedUser = await User.findByIdAndDelete( id );
    res.status(200).json(deletedUser);
}

export {register, login, deleteAccount};