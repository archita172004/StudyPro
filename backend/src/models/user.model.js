import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    // confirmPassword is a virtual field - won't be saved to database
    refreshToken: {
      type: String,
    },
    currentEducation: {
      type: String,
      default: "others",
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
