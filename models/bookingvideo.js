var mongoose = require("mongoose");


const bookingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startTime: {type:Number, required:true},
    endTime: {type:Number, required:true},
    clientName: {type:String, required:true}
});

const Booking = mongoose.model('Booking', bookingSchema);