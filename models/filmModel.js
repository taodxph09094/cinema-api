const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nhập tên phim"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Nhập mô tả"],
  },
  info: {
    type: String,
    required: [true, "Nhập thông tin phim"],
  },
  nation: {
    type: String,
    required: [true, "Quốc gia"],
  },
  type: {
    type: String,
    required: [true, "Thể loại"],
  },
  director: {
    type: String,
    required: ["Nhập đạo diễn"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Nhập danh mục phim"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  released: {
    type: String,
    required: [true, "Nhập ngày phát hành"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Film", filmSchema);