// routes/dividas.js
const { Divida } = require('../models');

module.exports = app => {
  app.get('/dividas', async (req, res) => {
    const dividas = await Divida.findAll();
    res.json(dividas);
  });

  app.post('/dividas', async (req, res) => {
    const divida = await Divida.create(req.body);
    res.json(divida);
  });

  app.put('/dividas/:id', async (req, res) => {
    const divida = await Divida.findByPk(req.params.id);
    divida.update(req.body);
    res.json(divida);
  });

  app.delete('/dividas/:id', async (req, res) => {
    const divida = await Divida.findByPk(req.params.id);
    divida.destroy();
    res.json({ success: true });
  });
};
