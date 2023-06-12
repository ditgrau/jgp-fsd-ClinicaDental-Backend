const errorController = {}

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

errorController.shortPassword = (res) => {
    return res.status(400).json({
        Message: "Your password should be longer"
    })
}

////////////////////////////////////////////////

module.exports = errorController;