const { User } = require('../../models');
const userGetByNameController = {};

/////////////////////////////////////////////////////////////

userGetByNameController.getByName = async (req, res) => {
    try {
        const { name } = req.params
        const userByName = await User.findAll(
            {
                where: {
                    name: name
                },
                attributes:
                {
                    exclude: ["createdAt", "updatedAt","password"]
                }
            });

        if (userByName.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No hay usuarios con este nombre",
            })
        }

        return res.json({
            success: true,
            userByName: userByName
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
    }
}

/////////////////////////////////////////////////////////////

module.exports = userGetByNameController;
