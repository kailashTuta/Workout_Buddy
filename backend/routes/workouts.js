const express = require("express");

const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const Workout = require("../models/WorkoutModel");

const router = express.Router();

// GET All Workouts
router.get("/", getWorkouts);

// GET a Single Workout
router.get("/:id", getWorkout);

// POST a new Workout
router.post("/", createWorkout);

// DELETE a Workout
router.delete("/:id", deleteWorkout);

// UPDATE a Workout
router.patch("/:id", updateWorkout);

module.exports = router;
