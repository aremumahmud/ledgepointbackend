const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./config/knex');
const adminRoutes = require('./routes/adminRoutes');
const { addClient, getClients } = require('./controllers/adminController');
const dot = require('dotenv')
const mongoose = require('mongoose');
const cors = require('cors');

dot.config()

// Connect to MongoDB
mongoose.connect(process.env.mongoURI || 'mongodb://localhost:27017/clipboar3d', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/admin', adminRoutes);


getClients({}, {
    json: (f) => {
        console.log(f)
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;