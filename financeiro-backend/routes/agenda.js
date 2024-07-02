// routes/agenda.js
const { Agenda } = require('../models');

module.exports = app => {
  app.get('/agenda', async (req, res) => {
    const agendas = await Agenda.findAll();
    res.json(agendas);
  });

  app.post('/agenda', async (req, res) => {
    const agenda = await Agenda.create(req.body);
    res.json(agenda);
  });

  app.put('/agenda/:id', async (req, res) => {
    const agenda = await Agenda.findByPk(req.params.id);
    agenda.update(req.body);
    res.json(agenda);
  });

  app.delete('/agenda/:id', async (req, res) => {
    const agenda = await Agenda.findByPk(req.params.id);
    agenda.destroy();
    res.json({ success: true });
  });
};
