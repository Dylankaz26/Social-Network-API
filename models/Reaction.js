const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Schema to create a reaction
const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            // Must be less than 280 characters
            maxlength: 280,
        },
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // Use getter method to format timestamp on query
            get: (createdAtVal) => dateFormat(createdAtVal),
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;