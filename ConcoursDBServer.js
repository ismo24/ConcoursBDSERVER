require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/download-ConcoursBF', (req, res) => {
    const dbPath = path.join(__dirname, '..', 'Databases', 'BURKINA_FASO', 'ConcoursBF.db');
   res.download(dbPath);
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));