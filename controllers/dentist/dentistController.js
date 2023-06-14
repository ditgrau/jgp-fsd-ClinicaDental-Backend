const { Dentist } = require('../../models');
const dentistController = {};

//////////////////////////////////////////////////

dentistController.updateDentistProfile = async (req, res) => {
    try {
        const myId = req.userId
        const { specialtyId, collegiate } = req.body

        const myProfile = await Dentist.update({
            specialtyId: specialtyId,
            collegiate: collegiate
        },
            {
                where:
                {
                    userId: myId,
                }
            })

        if (!specialtyId || !collegiate) {
            return errorController.emptyFields(res);
        }

        const updatedProfile = await Dentist.findByPk(myId,
            {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })

        return res.json({
            Message: "Updated profile",
            myProfile: myProfile,
            "Your profile": updatedProfile
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })

    }
}


/////////////////////////////////////////////////

module.exports = dentistController;