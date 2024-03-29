const jwt = require('jsonwebtoken');
const User = require('../models/User')
const { REFRESH_TOKEN_SECRET } = require('../env.js');
const { TOKEN_SECRET } = require('../env.js');


exports.createUser = async (name, email, password, role) => {

    try {
        const user = await (User.create({ name, email, password, role }));
        let token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET, { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: '10d' });
        user.refreshToken = refreshToken;
        user.token = token;
        await user.save();
        return user;
    } catch (error) {
        console.log(error.status)
        throw new Error(error.message);
       
    }
}


exports.login = async ({ email, password }) => {


    let user = await User.findOne({ email, password });

    if (user) {

        let token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET, { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: '10d' });

        user.refreshToken = refreshToken;
        await user.save({ email, password, refreshToken });
        return user;
    } else {
        throw new Error('No such user');
    }


};

exports.register = async ({ name, email, password, role }) => {

    let user = await User.findOne({ email, password });

    if (!user) {
        await User.create({ name, email, password, role });

        user = await User.findOne({ email, password });
        console.log(user)
        let token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET, { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: '10d' });

        user.refreshToken = refreshToken;
        user.role = role;
        await user.save();
        return { user, token, role, refreshToken };
    }

    return user;

}



exports.refresh = async (refreshToken) => {
    let { _id } = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);

    let user = await User.find({ _id, refreshToken });

    if (user) {
        let token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET, { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: '10d' });

        return { token, refreshToken };
    } else {
        return null;
    }
}

exports.updateOneById = async (id, data) => {
    const user = await User.findOneAndUpdate({phone: data.phone, gender: data.gender});
   

    await user.save();
};

