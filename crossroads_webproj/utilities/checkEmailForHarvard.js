module.exports = function checkEmailForHarvard(email) {
    if(email.includes('harvard')) {
        return true;
    } else {
        return false;
    }
};