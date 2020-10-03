import { medicineModel } from '../models/Medicine.js';

const getMedicines = async (req, res) => {
  const name = req.query.name.toUpperCase();

  const medicine = await medicineModel.find({
    $or: [
      { substancia: { $regex: '.*' + name + '.*' } },
      { produto: { $regex: '.*' + name + '.*' } },
    ],
  });

  const result = {
    data: [],
    message: ""
  };

  if(medicine.length > 0) {
    result.data = medicine;
    res.status(200).send(result);
  }else{
    result.message = "Nenhum resultado encontrado";
    res.status(404).send(result);
  }


};

export default { getMedicines };
