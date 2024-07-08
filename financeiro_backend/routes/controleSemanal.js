// routes/controleSemanal.js
const { ControleSemanal } = require('../models');

module.exports = app => {
  app.get('/controle-semanal', async (req, res) => {
    const controles = await ControleSemanal.findAll();
    res.json(controles);
  });

  app.post('/controle-semanal', async (req, res) => {
    const controle = await ControleSemanal.create(req.body);
    res.json(controle);
  });

  app.put('/controle-semanal/:id', async (req, res) => {
    const controle = await ControleSemanal.findByPk(req.params.id);
    controle.update(req.body);
    res.json(controle);
  });

  app.delete('/controle-semanal/:id', async (req, res) => {
    const controle = await ControleSemanal.findByPk(req.params.id);
    controle.destroy();
    res.json({ success: true });
  });
};
