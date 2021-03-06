import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const Saveoder = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    linked: {
      type: String,
    },
    amount: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    commodity_value: {
      type: String,
      trim: true,
    },
    classification: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    name_pro: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
    },
    sale: {
      type: Number,
      trim: true,
    },
    user_id: {
      type: String,
      trim: true,
    },
    shop_id: {
      type: ObjectId,
      ref: "shopowner",
      required: true,
    },
    pro_id: {
      type: ObjectId,
      ref: "product",
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("saveoders", Saveoder);
