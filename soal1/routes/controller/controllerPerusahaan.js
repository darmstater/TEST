const { Perusahaan } = require("../../models");

module.exports = {
    getAll: async(req, res) => {
        const sqlOption = {
            attributes:[
                "id",
                "name",
            ]
        }
        const perusahaan = await Perusahaan.findAndCountAll(sqlOption);
        return res.json({
            status: "Berhasil!",
            data: {
                perusahaan: perusahaan.rows,
            }
        });
    } 
}