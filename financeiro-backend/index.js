// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
require('./routes/dividas')(app);
require('./routes/orcamento')(app);
require('./routes/controleSemanal')(app);
require('./routes/metas')(app);
require('./routes/agenda')(app);
require('./routes/auth')(app);
require('./routes/receitas')(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
