const error = {}

////////////////////////////////////////////////

error.emptyFields = (res) => {
    return res.status(400).json({
        Error: error.name,
        Message: "Empty fields: you must complete your request"
    })
}

////////////////////////////////////////////////

module.exports = error;