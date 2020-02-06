const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exerciseType: {
    type: String,
    trim: true,
    },
  exerciseName: {
    type: String,
    trim: true,
    required: "Name is required",
    },
  weight: {
    type: Number,
    required: "Weight is required"
    },
  sets: {
    type: Number,
    required: "Sets is required"
    },
  reps: {
    type: Number,
    required: "Reps is required"
    },
  duration: {
    type: Number,
    required: "Duration is required"
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
