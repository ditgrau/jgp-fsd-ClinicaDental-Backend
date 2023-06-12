const { Treatment, Dentist, Specialty, User } = require('../models');
const treatmentController = {};

///////////////////////////////////////////

treatmentController.dentistByTreatment = async (req, res) => {
    try {
        // requiero por el body el numero de id del tratamiento
        const { idQuery } = req.body
        const treatBySpecialty = await Treatment.findByPk(idQuery)
        // manejo de excepciones de la documentacion
        if (treatBySpecialty === null) {
            console.log('Not found!');
        }
        // a partid de los resultados saco la especialidad
        const specialty = await Specialty.findByPk(treatBySpecialty.specialtyId)
        // y los dentistas que son especialistas
        const dentistBySpecialty = await Dentist.findAll(
            {
                where:
                {
                    specialtyId: treatBySpecialty.specialtyId
                }
            }
        );
        // de la tabla dentistas me interesan estos dos campos
        const detailsDentist = dentistBySpecialty.map(dentist => (
            {
                "ID dentista": dentist.id,
                "Nº colegiado": dentist.collegiate
            }
        ))
        // y este, para buscar en la tabla Users
        const userIdDentist = dentistBySpecialty.map(dentist => (
            dentist.userId
        ));
        // 'userIdDentist' tengo un array con los userId de cada medico de esa especialidad (hacer mas seeders, VAGA!)
        const dentistNames = [];
        for (let i = 0; i < userIdDentist.length; i++) {
            const getNames = await User.findOne(
                {
                    where:
                    {
                        id: userIdDentist[i]
                    }
                }
            )
            dentistNames.push(getNames)

        return res.json({
                    "dentistNames": getNames,
                    "userId": userIdDentist,
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