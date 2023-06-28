const { User , Dentist , Specialty} = require('../../models');
const userMyProfileController = {};

////////////////////////////////////////////////////////////////////

userMyProfileController.myProfile = async (req, res) => {
    try {
        const myId = req.userId //lo saco del token
        const myProfile = await User.findByPk(myId, {
            attributes: {
                exclude: ['password']
            },
            include: {
                model: Dentist,
                attributes: ['specialtyId', 'collegiate'],
                include: {
                    model: Specialty,
                    attributes: ['name']
                }
            }
        })

        return res.json({
            succcess: true,
            myProfile: myProfile
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.name,
            message: 'Can not be displayed',
        })
    }
}

////////////////////////////////////////////////////////////////////

module.exports = userMyProfileController;