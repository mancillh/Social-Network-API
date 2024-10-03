const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// create thought Schema; thoughtSchema is the parent/document
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `reactionCount` that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

function formatDate(createdAt) {
    return (createdAt.toLocaleString());
  };

// register thought Schema by creating a model
const Thought = model('Thought', thoughtSchema);

// export Thought model
module.exports = Thought;
