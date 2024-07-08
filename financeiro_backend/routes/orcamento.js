// routes/orcamento.js
const { Orcamento } = require('../models');

module.exports = app => {
  app.get('/orcamento', async (req, res) => {
    const orcamentos = await Orcamento.findAll();
    res.json(orcamentos);
  });

  app.post('/orcamento', async (req, res) => {
    const orcamento = await Orcamento.create(req.body);
    res.json(orcamento);
  });

  app.put('/orcamento/:id', async (req, res) => {
    const orcamento = await Orcamento.findByPk(req.params.id);
    orcamento.update(req.body);
    res.json(orcamento);
  });

  app.delete('/orcamento/:id', async (req, res) => {
    const orcamento = await Orcamento.findByPk(req.params.id);
    orcamento.destroy();
    res.json({ success: true });
  });
};
