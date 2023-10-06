const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3000; 

try {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} catch (error) {
    console.error(`Error starting the server: ${error.message}`);
}
