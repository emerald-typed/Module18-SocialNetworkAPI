const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      maxlength: 25,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    //fix this
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    //fix this
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
});
const User = model('user', userSchema);
module.exports = User;