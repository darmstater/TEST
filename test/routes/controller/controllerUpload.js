const { Upload } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const { keterangan, filepdf, filefoto } = req.body;

      // Validasi input
      if (!keterangan || !filepdf || !filefoto) {
        return res.status(400).json({
          message: "Semua field harus diisi.",
        });
      }

      // Membuat data Upload
      const uploadedFile = await Upload.create({
        keterangan,
        filepdf,
        filefoto,
      });

      res.status(201).json({
        message: "Terupload!",
        data: uploadedFile,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "Terjadi kesalahan dalam server.",
      });
    }
  },
};
