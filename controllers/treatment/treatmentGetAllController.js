const { Treatment , Specialty , Dentist , User } = require('../../models');
const treatmentGetAllController = {};

///////////////////////////////////////////

treatmentGetAllController.getAllTreatments = async (req, res) => {
    try {

        const allTreatments = await Treatment.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: {
                model: Specialty,
                attributes: ['name', 'id'],
                include: [
                    {
                        model: Dentist,
                        attributes: ['collegiate', 'userId'],
                        include: [
                            {
                                model: User,
                                attributes: ['name' , 'surname' ]
                            }
                        ]
                    }
                ]
            }
        })

        return res.json({
            allTreatments: allTreatments
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}

///////////////////////////////////////////

module.exports = treatmentGetAllController;