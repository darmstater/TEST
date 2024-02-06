// routes/controller/controllerSoal5.js
const { Karyawan, Perusahaan } = require('../../models');

const getKaryawanPerusahaan = async (req, res) => {
  try {
    const result = await Karyawan.findAll({
      include: [Perusahaan],
    });

    res.json({
      status: 'Success',
      data: result,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      status: 'Error',
      message: 'Internal Server Error',
    });
  }
};

module.exports = { getKaryawanPerusahaan };
