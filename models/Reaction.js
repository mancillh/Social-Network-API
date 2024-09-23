const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');
const userSchema = require('./User');
const formatDate = require('../utils/formatDate');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Types.ObjectId(),
            default:
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            userSchema,
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate(Date),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

function formatDate(Date) {
    dayjs(Date).format('MM/DD/YYYY')
}

// Create a virtual property `reactionCount` that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
