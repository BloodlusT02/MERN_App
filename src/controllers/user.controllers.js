const { asyncHandler } = require("../utils/asyncHandler");
const { ApiError } = require("../utils/ApiError");
const { User } = require("../models/user.model");
const { uploadOnCloudnary } = require("../utils/cloudnary")

const registerUser = asyncHandler(async (req, res) => {
  const { username, fullname, email, password } = req.body;
  // console.log(`email: ${email}, ${password}, ${username}`);

// Checking if any field is empty  
  if (username === "") throw new ApiError(400, "username is required");
  if (fullname === "") throw new ApiError(400, "fullname is required");
  if (email === "") throw new ApiError(400, "email is required");
  if (password === "") throw new ApiError(400, "password is required");

  const existedUser = User.findOne({
    $or: [{ username }, { email }]
  })

  if(existedUser){
    throw new ApiError(409, "user with email or username already exists")
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar file is required")
  }

});

module.exports = { registerUser };
