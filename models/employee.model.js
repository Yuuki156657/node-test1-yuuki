const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});

//validation for email
// employeeSchema.path('email').validate((val) => {
//     return emailRegex.text(val);
// }, 'Invalid e-mail.');

mongoose.model('Employee', employeeSchema);