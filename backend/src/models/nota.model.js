const mongoose = require('mongoose');

// Aquí definimos los campos que tendrá cada nota
const notaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true, // El título es obligatorio
  },
  contenido: {
    type: String,
    required: true, // El contenido es obligatorio
  },
});

// Crea y exporta el modelo Nota
const Nota = mongoose.model('Nota', notaSchema);

module.exports = Nota;