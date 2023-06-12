const { Treatment , Dentist , Specialty, User} = require('../models');
const treatmentController = {};

///////////////////////////////////////////

treatmentController.dentistByTreatment = async (req, res) => {
    try {
        const { idQuery } = req.body
        const treatBySpecialty = await Treatment.findByPk(idQuery)

        if (treatBySpecialty === null) {
            console.log('Not found!');
        }
        const specialty = await Specialty.findByPk(treatBySpecialty.specialtyId)

        const dentistBySpecialty = await Dentist.findAll(
            {
                where:
                {
                    specialtyId: treatBySpecialty.specialtyId
                }
            }
        );
        
        const detailsDentist = dentistBySpecialty.map(dentist => (
            {
                "ID dentista": dentist.id,
                "Nº colegiado": dentist.collegiate
            }
        ))
        
        
        const userIdDentist = dentistBySpecialty.map(dentist => (
            dentist.userId
        ));
        
        

        // if (dentistBySpecialty === []) {
        //     console.log('Not found!');
        // } 

        return res.json({
            "user": userIdDentist,
            "Info dentistas": detailsDentist,
            dentista: dentistBySpecialty,
            "Tratamiento": 
            {
            "Nombre": treatBySpecialty.name,
            "Precio": treatBySpecialty.price,
            "Duracion tratamiento": treatBySpecialty.time
            },
            "Especialidad": specialty.name,

        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
    }
}


///////////////////////////////////////////

module.exports = treatmentController;