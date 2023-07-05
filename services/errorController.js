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
        Message: "Email/password fields do not comply with the pattern"
    })
}

////////////////////////////////////////////////

errorController.timeHour = (res) => {
    return res.status(400).json({
        Message: `Incorrect time value or format. Reminder: 00:00:00`
    })
}

////////////////////////////////////////////////

errorController.invalidData = (res) => {
    return res.status(400).json({
        Message: `Invalid data`
    })
}

////////////////////////////////////////////////

module.exports = errorController;