import { medicineModel } from '../models/Medicine.js';

const getMedicines = async (req, res) => {
  const name = req.query.name.toUpperCase();

  const medicine = await medicineModel.find({
    $or: [
      { substancia: { $regex: '.*' + name + '.*' } },
      { produto: { $regex: '.*' + name + '.*' } },
    ],
  });
  res.send(medicine);
};

export default { getMedicines };
