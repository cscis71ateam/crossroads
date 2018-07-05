module.exports = function checkEmailForEdu(email) {
    if(email.includes('edu')) {
        return true;
    } else {
        return false;
    }
};