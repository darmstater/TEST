const { Pengirim, Penerima, Mutasi } = require("../../models");
const { sequelize } = require("../../models");

module.exports = {
  transferUang: async (req, res) => {
    const { pengirim_id, penerima_id, jumlah_transfer } = req.body;

    const transaksi = await sequelize.transaction();

    try {
      // Mengurangkan saldo pengirim
      const pengirim = await Pengirim.findByPk(pengirim_id, { transaction: transaksi });
      pengirim.saldo -= jumlah_transfer;
      await pengirim.save({ transaction: transaksi });

      // Menambah saldo penerima
      const penerima = await Penerima.findByPk(penerima_id, { transaction: transaksi });
      penerima.saldo += jumlah_transfer;
      await penerima.save({ transaction: transaksi });
 
      // Mencatat transaksi di tabel mutasi
      await Mutasi.create(
        {
          pengirim_id,
          penerima_id,
          jumlah_transfer,
        },
        { transaction: transaksi }
      );

      await transaksi.commit();

      return res.json({
        status: "Berhasil!",
        message: "Transaksi berhasil dilakukan.",
      });
    } catch (error) {
      // Rollback
      await transaksi.rollback();

      console.error("Error:", error);
      return res.status(500).json({
        status: "Gagal!",
        message: "Terjadi kesalahan dalam server.",
      });
    }
  },

  printMutasi: async (req, res) => {
    try {
      // Ambil semua data dari tabel Mutasi
      const mutasiData = await Mutasi.findAll();

      // Kirim data sebagai respons
      return res.json({
        status: "Berhasil!",
        data: {
          mutasi: mutasiData,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({
        status: "Gagal!",
        message: "Terjadi kesalahan dalam server.",
      });
    }
  },
};
