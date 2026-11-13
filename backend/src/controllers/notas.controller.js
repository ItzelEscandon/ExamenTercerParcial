const Nota = require('../models/nota.model');

// Obtener todas las notas
const obtenerNotas = async (req, res) => {
  try {
    const notas = await Nota.find();
    res.status(200).json(notas);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener las notas' });
  }
};

// Crear una nota nueva
const crearNota = async (req, res) => {
  const { titulo, contenido } = req.body;

  if (!titulo || !contenido) {
    return res.status(400).json({ msg: 'Título y contenido son obligatorios' });
  }

  try {
    const nota = new Nota({ titulo, contenido });
    await nota.save();

    res.status(201).json(nota);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear la nota' });
  }
};

module.exports = { obtenerNotas, crearNota };