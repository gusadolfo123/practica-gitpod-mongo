const app = require('./app');
require('./database');

app.listen(3500, () => {
    console.log(`Server is listen on port 3500`);
});

