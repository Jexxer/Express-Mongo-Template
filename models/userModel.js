const mongoose = require('../db/connection')

// LIST YOUR SCHEMAS HERE. BELOW IS AN EXAMPLE OF A USER SCHEMA

// location schema => user schema
const locationSchema = new mongoose.Schema({
    address1: {type: String, default: ""},
    address2: {type: String, default: ""},
    city: {type: String, default: ""},
    state: {type: String, default: ""},
    zipcode: {type: Number, default: ""},
}, {_id : false, minimize: false})

// transaction schema => user schema
const transactionSchema = new mongoose.Schema({
    description: {type: String, required: true},
    date: {type: Date, required: true},
    type: {type: String, required: true},
    category: {type: String, required: true},
    subcategory: {type: String, required: true},
    amount: {type: Number, required: true},
})

// budget schema => user schema
const budgetSchema = new mongoose.Schema({
    category: {type: String, required: true},
    subcategory: String,
    amount: Number,
})

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {
        type: String,
        index: {unique: true, sparse: true},
        trim: true,
        lowercase: true,
    },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    location: {
        type: locationSchema,
        default: {
            address1: null,
            address2: null,
            city: null,
            state: null,
            zipcode: null
        }
    },
    transactions: [transactionSchema],
    budgets: [budgetSchema],
    password: {type: String, required: true, minlength: 8},
    isAdmin: {type: Boolean, required: true},
    refreshTokens: [String],
    profilePicURL: String,
    phone: Number,
    tempSecret: String,
    authSecret: String,
    isAuthEnabled: {type: Boolean, default: false},
    isSmsVerified: {type: Boolean, default: false},
    useSmsLogin: {type: Boolean, default: false},
    useAuthLogin: {type: Boolean, default: false},
    preferedAuth: {type: Number, default: 0}

},  { timestamps: true })

// Place schema inside variable.
const User = mongoose.model("User", userSchema);

// Export the variable.
module.exports = User;