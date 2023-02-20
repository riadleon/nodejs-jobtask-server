const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());



app.get('/api/get-countries-tags', (req, res) => {
    const matrix = generateMatrix();
    const ranks = calculateRanks(matrix);
    res.json({ outcome: matrix, rank: ranks });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));