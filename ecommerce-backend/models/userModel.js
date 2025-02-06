const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * User Schema for MongoDB using Mongoose.
 * 
 * This schema defines the structure of the user documents in the database.
 * 
 * @typedef {Object} User
 * @property {string} name - The name of the user. This field is required.
 * @property {string} email - The email of the user. This field is required and must be unique.
 * @property {string} password - The password of the user. This field is required.
 * @property {string} [profilePic=""] - The profile picture URL of the user. Defaults to an empty string.
 * @property {string} [role="GENERAL"] - The role of the user. Can be either 'ADMIN' or 'GENERAL'. Defaults to 'GENERAL'.
 * @property {Date} createdAt - The date when the user was created. Automatically managed by Mongoose.
 * @property {Date} updatedAt - The date when the user was last updated. Automatically managed by Mongoose.
 * 
 * @version 1.0.0
 * @since 2025
 * 
 * @example
 * // Example of a user document
 * {
 *   name: "John Doe",
 *   email: "john.doe@example.com",
 *   password: "hashedpassword",
 *   profilePic: "http://example.com/profile.jpg",
 *   role: "GENERAL",
 *   createdAt: "2025-01-01T00:00:00.000Z",
 *   updatedAt: "2025-01-01T00:00:00.000Z"
 * }
 */
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    role: {
        type: String,
        enum: ['ADMIN', 'GENERAL'],
        default: 'GENERAL',
    },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);