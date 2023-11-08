const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); 

const convertRoutes = require('./routes/convertRoutes'); 
app.use('/', convertRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
