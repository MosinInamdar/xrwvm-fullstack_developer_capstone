/*jshint esversion: 8 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    dealership: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true
    },
    purchase: {
        type: Boolean,
        required: true
    },
    purchase_date: {
        type: Date, // Assuming purchase_date should be a Date type
        required: true
    },
    car_make: {
        type: String,
        required: true
    },
    car_model: {
        type: String,
        required: true
    },
    car_year: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('reviews', reviewsSchema);
