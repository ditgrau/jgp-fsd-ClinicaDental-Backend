const errorController = {}

////////////////////////////////////////////////

errorController.emptyFields = (res) => {
    return res.status(400).json({
        Error: error.name,
        Message: "Empty fields: you must complete your request"
    })
}

////////////////////////////////////////////////

errorController.singleFields = (res) => {
    return res.status(400).json({
        Message: "Fields with unique values, already existing"
    })
}

////////////////////////////////////////////////

module.exports = errorController;