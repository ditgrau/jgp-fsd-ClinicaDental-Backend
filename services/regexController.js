const regexController = {}
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;

////////////////////////////////////////////////

regexController.emailPattern = (email) => {
    const isValidEmail = emailRegex.test(email);
    return isValidEmail //true or false
}

////////////////////////////////////////////////

regexController.passwordPattern = (password) => {
    const isValidPassword = passwordRegex.test(password);
    return isValidPassword //true or false
}

////////////////////////////////////////////////

module.exports = regexController;