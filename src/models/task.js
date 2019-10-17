const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    task: String,
    description: String
});

module.exports = model('Task', TaskSchema);