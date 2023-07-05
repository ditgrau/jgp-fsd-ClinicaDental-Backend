const { User } = require('../../models');
const userGetByIdController = {};

/////////////////////////////////////////////////////////////

userGetByIdController.getById = async (req, res) => {
    try {
        const { id } = req.params
        const getById = await User.findOne(
            {
                where: {
                    id: id
                },
                attributes:
                {
                    exclude: ["createdAt", "updatedAt","password"]
                }
            });

        if (getById.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No hay usuarios con este id",
            })
        }

        return res.json({
            success: true,
            getById: getById
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

module.exports = userGetByIdController;
