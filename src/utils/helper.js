var bcrypt = require('bcrypt');

module.exports = {
    strip_tags(text) {
        return text.replace(/(<([^>]+)>)/ig, "");
    },

    getHash(params) {
        let password = params.password;
        let repassword = params.rePassword;
        let saltRounds = 10;

        if (password !== repassword) {
            return false;
        }

        var hash = bcrypt.hashSync(password, saltRounds);
        return hash
    },

    verifyPassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
};
