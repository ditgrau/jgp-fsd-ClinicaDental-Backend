const errorController = {}

////////////////////////////////////////////////

errorController.badRequest = (res) => {
    return res.status(400).json({
        Message: "Invalid credentials for your request"
    })
}

////////////////////////////////////////////////

errorController.emptyFields = (res) => {
    return res.status(400).json({
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

errorController.fieldsPattern = (res) => {
    return res.status(400).json({
        Message: "Fields do not comply with the pattern"
    })
}

////////////////////////////////////////////////

module.exports = errorController;