const express=require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const app= express();

require("dotenv").config()

const dbConfig=require('./config/dbConfig');
const portfolioRoute=require('./routes/portfolioRoutes');
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const port=process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api/portfolio',portfolioRoute)


app.listen(port,()=>{
    console.log("server is listening on port " + port);
});