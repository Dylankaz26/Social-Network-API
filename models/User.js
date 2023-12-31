const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // use regex to validate correct email format
            match: [/.+@.+\..+/],
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;