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

      // validate: [validateEmail, 'Please fill a valid email address'],
      //   match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

      // validate: {
      //   validator: () => Promise.resolve(false),
      //   message: 'Email validation failed'
      // }
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    // friends: [userSchema],
  },
  // {
  //   toJSON: {
  //       virtuals: true,
  //     },
  // }
);

// Create a virtual property `friendCount` that retrieves the length of the user's friends array field on query.
// userSchema.virtual('friendCount').get(function () {
//     return this.friends.length;
//   });

// register thought Schema by creating a model
const User = model('User', userSchema);

// export User model
module.exports = User;
