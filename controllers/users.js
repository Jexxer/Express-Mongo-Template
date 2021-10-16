// Imports
const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

// Handle requests below.
// Example of requests:

// ==================== Get ALL Users ====================
router.get("/", (req, res, next) => {
    User.find({})
    .then((user) => res.json(user))
    .catch(next);
})

// ==================== Update a Users (Use carefully) ====================
router.put('/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((user) => res.json(user))
    .catch(next)
})

// ==================== Update a users name ====================
router.put('/changename/:id', verify, (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id}, { $set: {firstName: req.body.firstName, lastName: req.body.lastName}}, {new: true})
        .then((user) => res.json(user))
        .catch(next)
})

module.exports = router;