// routes/metas.js
const { Meta } = require('../models');

module.exports = app => {
  app.get('/metas', async (req, res) => {
    const metas = await Meta.findAll();
    res.json(metas);
  });

  app.post('/metas', async (req, res) => {
    const meta = await Meta.create(req.body);
    res.json(meta);
  });

  app.put('/metas/:id', async (req, res) => {
    const meta = await Meta.findByPk(req.params.id);
    meta.update(req.body);
    res.json(meta);
  });

  app.delete('/metas/:id', async (req, res) => {
    const meta = await Meta.findByPk(req.params.id);
    meta.destroy();
    res.json({ success: true });
  });
};
