import mongoose from "mongoose";
// import { Conversation } from "../models/Conversation.js";
// const Conversation = require('C:\Users\HP\OneDrive\Desktop\PROJECT\backend\models\Conversation .js');


const schema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Conversation = mongoose.model("Conversation", schema);

// Conversation.js
// module.exports = Conversation;  // For CommonJS
// export default Conversation;    // For ES Module
