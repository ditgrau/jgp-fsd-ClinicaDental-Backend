const regexController = {}
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
////////////////////////////////////////////////


regexController.emailPattern = (email) => {
    const isValidEmail = emailRegex.test(email);
    return isValidEmail //true or false
}

////////////////////////////////////////////////

module.exports = regexController;