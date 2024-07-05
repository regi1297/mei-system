const { Receita } = require('../models');

module.exports = app => {
  app.get('/receitas', async (req, res) => {
    const receitas = await Receita.findAll();
    res.json(receitas);
  });

  app.post('/receitas', async (req, res) => {
    const receita = await Receita.create(req.body);
    res.json(receita);
  });

  app.put('/receitas/:id', async (req, res) => {
    const receita = await Receita.findByPk(req.params.id);
    receita.update(req.body);
    res.json(receita);
  });

  app.delete('/receitas/:id', async (req, res) => {
    const receita = await Receita.findByPk(req.params.id);
    receita.destroy();
    res.json({ success: true });
  });
};
