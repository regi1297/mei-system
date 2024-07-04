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
    if (meta) {
      await meta.update(req.body);
      res.json(meta);
    } else {
      res.status(404).json({ error: 'Meta not found' });
    }
  });

  app.delete('/metas/:id', async (req, res) => {
    const meta = await Meta.findByPk(req.params.id);
    if (meta) {
      await meta.destroy();
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Meta not found' });
    }
  });

  // Nova rota para marcar uma meta como concluída
  app.patch('/metas/:id/concluir', async (req, res) => {
    const meta = await Meta.findByPk(req.params.id);
    if (meta) {
      meta.concluido = true;
      await meta.save();
      res.json(meta);
    } else {
      res.status(404).json({ error: 'Meta not found' });
    }
  });
};
