const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    TID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxlength: 280,
    },
    createdAt:{
      type: Date,
      default: Date.now,
    },
    //fix this    this.user.username
    username: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    //fix this
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reactions',
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


const Thoughts = model('thought', thoughtSchema);
module.exports = Thoughts;