import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const generateAccessAndRefreshToken = async (userid) => {
  try {
    const user = await User.findById(userid);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Error while  generating tokens");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  //take data from req body
  // validate if there or not
  //find user
  //if user exist then throw error
  // store in user with hashed password
  //generate token
  //send response by removing encrypted password from it

  const { fullname, email, password, currentEducation } = req.body;
  if (!fullname || !email || !password || !currentEducation) {
    throw new ApiError(400, "All fields are required");
  }
  //check if user already exist
  const existingUser = await User.findOne({ $or: [{ fullname }, { email }] });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }
  //user created
  const user = await User.create({
    fullname,
    email,
    password,
    currentEducation,
  });

  //if user creates remove password and refreshtoken from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  //return response
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(400, "Email, password and fullname are required");
  }
  //check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "user does not exist");
  }

  // match password
  //matching using the input password and the hashed password in db
  const isPasswordMatched = await user.isPasswordMatched(password);
  if (!isPasswordMatched) {
    throw new ApiError(401, "Invalid credentials");
  }

  //generate token
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        { loggedInUser, accessToken, refreshToken },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  //user find and update refresh token to undefined
  //clear cookies
  //send response

  await User.findByIdAndUpdate(
    req.user._id,
    { $set: { refreshToken: undefined } },
    { new: true }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

export { registerUser, loginUser, logoutUser };
