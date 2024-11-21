import { Schema, model } from "mongoose";

// Address Schema
const addressSchema = new Schema({
  street1: { type: String, required: true },
  street2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zip: { type: String, required: true },
  // location: {
  //   type: { type: String, enum: ["Point"], required: true }, // GeoJSON type
  //   coordinates: { type: [Number], required: true }, // Array for coordinates [longitude, latitude]
  // },
});

// Profile Schema
const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  avatar: { type: String },
  bio: { type: String },
  address: { type: addressSchema, required: true },
});

// User Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true,
    },
    password: { type: String, required: true },
    email: {
      type: String,
      required: true,
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

export const User = model("User", userSchema);
