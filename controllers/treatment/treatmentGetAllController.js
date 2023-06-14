const { Treatment } = require('../../models');
const errorController = require('../../services/errorController')
const treatmentGetAllController = {};

///////////////////////////////////////////

treatmentGetAllController.getAllTreatments = async (req, res) => {
    try {

        const allTreatments = await Treatment.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })

        return res.json({
            "All Treatments": allTreatments
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.name
        })
    }
}

///////////////////////////////////////////

module.exports = treatmentGetAllController;