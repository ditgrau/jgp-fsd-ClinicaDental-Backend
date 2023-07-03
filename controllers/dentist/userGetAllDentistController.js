const { User, Dentist } = require('../../models');
const userGetAllDentistController = {}

///////////////////////////////////////////////////////

userGetAllDentistController.getAllDentist = async (req, res) => {
    try {

        const allDentist = await Dentist.findAll(
            {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                include: [
                    {
                        model: User,
                        attributes: ['name', 'surname']
                    }
                ]
            }
        )

        return res.json({
            message: "All results displayed",
            allDentist: allDentist,
            sucess: true
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
    }
}

//////////////////////////////////////////////////////

module.exports = userGetAllDentistController;