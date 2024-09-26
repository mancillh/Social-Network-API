const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const formatDate = require('../utils/formatDate');

// reactionSchema is child/subdocument
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), //mongoose.ObjectId OR mongoose.Types.ObjectId()
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

// Schema to create Thought model; thoughtSchema is the parent/document
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
            get: formatDate(Date),
        },
        username: {
            userSchema,
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// Create a virtual property `reactionCount` that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
