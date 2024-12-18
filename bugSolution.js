const express = require('express');
const app = express();
// Add the middleware to parse JSON requests
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data (e.g., save to database)
  console.log(data);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));