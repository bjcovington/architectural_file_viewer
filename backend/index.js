// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const authRoutes = require('./routes/auth');  
const projectFilesRoutes = require('./routes/projectFiles');  

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);  
app.use('/project-files', projectFilesRoutes);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
