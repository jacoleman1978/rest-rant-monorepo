const db = require('../models');

const {User} = db;

const defineCurrentUser = async (req, res, next) => {
    try {
        let user = await User.findOne({
            where: {
                userId: req.session.userId
            }
        })
        req.defineCurrentUser = user;
        next();
    } catch {
        next();
    }
}

module.exports = defineCurrentUser;