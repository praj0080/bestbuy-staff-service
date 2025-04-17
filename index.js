require('dotenv').config();
const express = require('express');
const app = express();
const staffRoutes = require('./routes/staffRoutes');

app.use(express.json());
app.use('/api/staff', staffRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Staff service running on port ${PORT}`);
});
