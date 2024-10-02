const { Schema, Types } = require('mongoose');

// reactionSchema is child/subdocument
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
            default: Date.now
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
    
// export Reaction schema
module.exports = reactionSchema;