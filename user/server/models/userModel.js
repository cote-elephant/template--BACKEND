import { Schema, model, ObjectId } from "mongoose";

// Address Schema
const addressSchema = new Schema({
  street1: { type: String, required: false },
  street2: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  country: { type: String, required: false },
  zip: { type: String, required: false },
  // location: {
  //   type: { type: String, enum: ["Point"], required: true }, // GeoJSON type
  //   coordinates: { type: [Number], required: true }, // Array for coordinates [longitude, latitude]
  // },
});

// Profile Schema
const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: false },
  avatar: { type: String },
  bio: { type: String },
  address: { type: addressSchema, required: true },
});

// User Schema
const userSchema = new Schema(
  {
    _id: { type: ObjectId, required: true },
    username: {
      type: String,
      unique: true,
      index: true,
    },
    password: { type: String, required: true, notEmpty: true },
    email: {
      type: String,
      required: true,
      isEmail: true,
      // match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
      unique: true,
    },
    profile: { type: profileSchema, required: true },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// without index I cannot use location due to GeoJSON
// Create 2dsphere index for geospatial queries
// userSchema.index({ "location": "2dsphere" });
// console.log(userSchema.index())

export const User = model("User", userSchema, "users");
