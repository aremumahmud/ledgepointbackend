const mongoose = require('mongoose');

const InvestorSchema = new mongoose.Schema({
    investor_email: String,
    investor_name: String,
    investor_phone: String,
    investor_position: String
});


module.exports = mongoose.model('Investor', InvestorSchema);