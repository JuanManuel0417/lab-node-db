/*
 * Laboratorio — Listado de personas
 * Archivo: src/models/persona.js
 * Tu tarea (paso 6): describir el documento Persona y exportar el modelo.
 * La colección en MongoDB se llama personas.
 * Guía: README.md
 */

const mongoose = require("mongoose");

// Paso 6: esquema con los campos de cada persona y sus reglas.
const personaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    edad: {
      type: Number,
      required: true,
      min: 0,
    },
    correo: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    collection: "personas",
  }
);

module.exports = mongoose.model("Persona", personaSchema);
