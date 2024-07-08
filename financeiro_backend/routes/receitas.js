const { Receitas } = require('../models');

module.exports = app => {
  app.get('/receitas', async (req, res) => {
    const receitas = await Receitas.findAll();
    res.json(receitas);
  });

  app.post('/receitas', async (req, res) => {
    const receitas = await Receitas.create(req.body);
    res.json(receitas);
  });

  app.put('/receitas/:id', async (req, res) => {
    const receitas = await Receitas.findByPk(req.params.id);
    receita.update(req.body);
    res.json(receitas);
  });

  app.delete('/receitas/:id', async (req, res) => {
    const receitas = await Receitas.findByPk(req.params.id);
    receitas.destroy();
    res.json({ success: true });
  });
};
