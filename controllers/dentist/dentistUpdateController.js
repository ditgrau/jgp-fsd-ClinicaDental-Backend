const { Dentist } = require('../../models');
const errorController = require('../../services/errorController');
const dentistUpdateController = {};

//////////////////////////////////////////////////

dentistUpdateController.updateDentistProfile = async (req, res) => {
    try {
        const myId = req.userId
        const { specialtyId, collegiate } = req.body

        const myProfile = await Dentist.update({
            specialtyId: specialtyId || this.Dentist,
            collegiate: collegiate || this.Dentist,
        },
            {
                where:
                {
                    userId: myId,
                }
            })

        const updatedProfile = await Dentist.findByPk(myId,
            {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })

        return res.json({
            Message: "Updated profile",
            myProfile: myProfile,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

/////////////////////////////////////////////////

module.exports = dentistUpdateController;