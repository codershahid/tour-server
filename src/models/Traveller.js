const { Schema, model } = require("mongoose");

const TravellerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
      enum: ["Africa", "Europe", "India"],
    },
    travellers: {
      type: Number,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Travellers", TravellerSchema);
