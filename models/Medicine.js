import mongoose from 'mongoose';

const medicineSchema = mongoose.Schema({
  substancia: {
    type: String,
  },
  cnpj: {
    type: String
  },
  laboratorio: {
    type: String
  },
  registro: {
    type: String
  },
  ean1: {
    type: String
  },
  produto: {
    type: String
  },
  dosagem: {
    type: String
  },
  finalidade: {
    type: String
  },
  tipo: {
    type: String
  },
  semimposto: {
    type: Number
  },
  pf0: {
    type: Number
  },
  pf12: {
    type: Number
  },
  pf17: {
    type: Number
  },
  pf17alc: {
    type: Number
  },
  pf175: {
    type: Number
  },
  pf175alc: {
    type: Number
  },
  pf18: {
    type: Number
  },
  pf18alc: {
    type: Number
  },
  pf20: {
    type: Number
  },
  pmc0: {
    type: Number
  },
  pmc12: {
    type: Number
  },
  pmc17: {
    type: Number
  },
  pmc17alc: {
    type: Number
  },
  pmc175: {
    type: Number
  },
  pmc175alc: {
    type: Number
  },
  pmc18: {
    type: Number
  },
  pmc18alc: {
    type: Number
  },
  pmc20: {
    type: Number
  },
  hospitalar: {
    type: Boolean
  },
  cap: {
    type: Boolean
  },
  confaz87: {
    type: Boolean
  },
  icms0: {
    type: Boolean
  },
  pisconfis: {
    type: String
  },
  tarja: {
    type: String
  }
}, { timestamps: { updateAt: false, createdAt: false }});

const medicineModel = mongoose.model('medicine', medicineSchema, 'medicine');

export { medicineModel };