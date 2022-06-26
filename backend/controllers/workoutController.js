const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");

// GET All Workout
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
};

// Get A Single Workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Workout" });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
        return res.status(404).json({ error: "No Such Workout " });
    }
    res.status(200).json(workout);
};

// Create New Workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

// Delete A Workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Workout" });
    }
    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
        return res.status(404).json({ error: "No Such Workout " });
    }
    res.status(200).json(workout);
};

// Update A Workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Workout" });
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!workout) {
        return res.status(404).json({ error: "No Such Workout " });
    }
    res.status(200).json(workout);
};

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
};
