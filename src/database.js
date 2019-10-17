const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gusadolfo123:gusadolfo123@cluster0-0pzn2.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db connected'))
    .catch(error => console.log(error));


