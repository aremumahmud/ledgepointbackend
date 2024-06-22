const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./config/knex');
const adminRoutes = require('./routes/adminRoutes');
const { addClient, getClients } = require('./controllers/adminController');
const dot = require('dotenv')
const cors = require('cors');

dot.config()


const app = express();
app.use(cors({
    origin: 'https://ledepointadmin.vercel.app/'
}))
app.use(bodyParser.json());

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