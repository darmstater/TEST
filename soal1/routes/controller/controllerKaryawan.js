const { Karyawan } = require("../../models");

module.exports = {
    createKaryawan: async (req, res) => {
        try {
          const { name, jenis_kelamin, email, perusahaan_id } = req.body;
    
          // Validasi input
          if (!name || !jenis_kelamin || !email || !perusahaan_id) {
            return res.status(400).json({
              status: "Gagal!",
              message: "Semua field harus diisi.",
            });
          }
    
          // Validasi format email menggunakan regex
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            return res.status(400).json({
              status: "Gagal!",
              message: "Format email tidak valid.",
            });
          }
    
          // Membuat data Karyawan
          const KaryawanBaru = await Karyawan.create({
            name,
            jenis_kelamin,
            email,
            perusahaan_id,
            created_at: new Date(),
          });
    
          return res.json({
            status: "Berhasil!",
            data: {
              karyawan: KaryawanBaru,
            },
          });
        } catch (error) {
          console.error('Error:', error);
          return res.status(500).json({
            status: "Gagal!",
            message: "Terjadi kesalahan dalam server.",
          });
        }
      },

  getKaryawan: async (req,res) => {
    try {
        const sqlOption = {
            attributes: ["id", "name"],
        };
        const karyawan = await Karyawan.findAndCountAll(sqlOption);
        return res.json({
            status: "Berhasil!",
            data: {
                karyawan: karyawan.rows,
            },
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            status: "Gagal!",
            message: "Terjadi kesalahan dalam server.",
        });
    }   
  },

  updateKaryawan: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, jenis_kelamin, email, perusahaan_id } = req.body;

      // ngecek karyawan apakah ada ato tidak
      const cekKaryawan = await Karyawan.findByPk(id);

      if (!cekKaryawan) {
        return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
      }

      // Update the Karyawan
      await cekKaryawan.update({
        name,
        jenis_kelamin,
        email,
        perusahaan_id,
        updated_at: new Date(),
      });

      return res.json({
        status: 'Success!',
        data: {
          karyawan: cekKaryawan,
        },
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({
        status: 'Gagal!',
        message: 'Terjadi kesalahan dalam server.',
      });
    }
  },

  deleteKaryawan: async (req, res) => {
    try {
      const { id } = req.params; 

      const existingKaryawan = await Karyawan.findByPk(id);

      if (!existingKaryawan) {
        return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
      }

      await existingKaryawan.update({ deleted_at: new Date() });

      return res.json({
        status: 'Success!',
        data: {
          karyawan: existingKaryawan,
        },
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({
        status: 'Gagal!',
        message: 'Terjadi kesalahan dalam server.',
      });
    }
  },

};
