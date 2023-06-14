const { Treatment, Dentist, Specialty, User } = require('../../models');
const errorController = require('../../services/errorController')
const treatmentDentistController = {};

///////////////////////////////////////////

treatmentDentistController.dentistByTreatment = async (req, res) => {
    try {
        // requiero por el body el numero de id del tratamiento
        const { idTreatment } = req.body
        const treatBySpecialty = await Treatment.findByPk(idTreatment)

        if (treatBySpecialty === null) {
            return errorController.invalidData(res)
        }
        // a partir de los resultados saco la especialidad
        const specialty = await Specialty.findByPk(treatBySpecialty.specialtyId)
        // y los dentistas que son especialistas
        const dentistBySpecialty = await Dentist.findAll({
            where:
            {
                specialtyId: treatBySpecialty.specialtyId
            },
            attributes: ['id', 'collegiate'],
            include:
                [
                    {
                        model: User,
                        attributes: ['name', 'surname']
                    }
                ]
        })

        return res.json({
            Treatment: treatBySpecialty.name,
            Specialty: specialty.name,
            "Dentists who perform the treatment": dentistBySpecialty.length,
            Dentists: dentistBySpecialty,
            
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
    }
}

///////////////////////////////////////////

module.exports = treatmentDentistController;