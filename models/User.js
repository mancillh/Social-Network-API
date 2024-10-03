const { Schema, model } = require('mongoose');

// create User Schema
const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-zA-Z0-9_\.-]+)@([a-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/, 'Please enter a valid email address'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    toJSON: {
        virtuals: true,
      },
    id: false,
  }
);

// Create a virtual property `friendCount` that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

// register thought Schema by creating a model
const User = model('User', userSchema);

// export User model
module.exports = User;
