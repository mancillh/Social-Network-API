const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), 
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
    },
    {
        toJSON: {
            virtuals: true,             
            getters: true,
        },
        id: false,
    }
);

function formatDate(createdAt) {
    return (createdAt.toLocaleString());
  };
  
// export Reaction schema
module.exports = reactionSchema;