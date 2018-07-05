module.exports = function checkForValidEmailAddress(email) {
    if(email.includes('@')) {
        return true;
    } else {
        return false;
    }
};