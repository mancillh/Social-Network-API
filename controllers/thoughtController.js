const { ObjectId } = require('mongoose').Types;

// import Thought model
const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    async getAllThoughts (req, res) {
        try {
            const thoughts = await Thought.find({}).populate('reaction');

            const thoughtObj = {
                thoughts,
            };

            res.status(200).json(thoughtObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId }).populate('reaction')
                .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' })
            }

            res.json({
                thought,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Create a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { Thoughts: thought._id } },
                { new:true }
            );

            if (!user) {
                return res
                .status(404)
                .json({ message: 'Thought created, but found no user with that id' });
            }
            res.status(201).json('Created the post');
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Update a thought
    async updateThought(req, res) {
        try {
            const result = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { thought: req.body },
                { new: true }
            );

            if (!result) {
                return res.status(404).json({ message: 'No such thought exists' });
            }

            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No such thought exists' });
            }

            res.status(200).json({ message: 'Thought successfully deleted' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Create a new reaction
    async createReaction(req, res) {
        try {
            const reaction = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { responseId: req.params.responseId } } },
                { runValidators: true, new: true }
            )

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
