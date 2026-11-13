const express = require("express");
const app = express();

const total = (precio, cant, desc) =>
  precio * cant * (1 - desc);

app.get("/total", (req, res) => {
  const { p, c } = req.query;
  res.json({ total: total(p, c, 0) });
});

app.get("/calcular", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ error: "a y b deben ser números" });
  }

  return res.json({ resultado: a + b });
});
module.exports = { app, total };

