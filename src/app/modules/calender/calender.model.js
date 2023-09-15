const mongoose = require("mongoose");
const CalenderSchema = new mongoose.Schema({
    event_id: { type: Number, required: true },
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    disabled: { type: Boolean, required: false },
    admin_id: { type: Array, required: false },
    color: { type: String, required: false },
    editable: { type: Boolean, required: false },
    deletable: { type: Boolean, required: false },
},{ timestamps: true, versionKey: false });
const Calender = mongoose.model("Calender", CalenderSchema);
module.exports = Calender;