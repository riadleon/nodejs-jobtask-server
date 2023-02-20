const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const countries = ["India", "Nepal", "Germany", "Finland"];
const matrixSize = 3;

function generateMatrix() {
  const matrix = [];
  for (let i = 0; i < matrixSize; i++) {
    const row = [];
    for (let j = 0; j < matrixSize; j++) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      row.push(countries[randomIndex]);
    }
    matrix.push(row);
  }
  return matrix;
}



app.get('/api/get-countries-tags', (req, res) => {
    const matrix = generateMatrix();
    const ranks = calculateRanks(matrix);
    res.json({ outcome: matrix, rank: ranks });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));