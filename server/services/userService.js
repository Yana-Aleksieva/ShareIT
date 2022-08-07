const jwt = require('jsonwebtoken');
const User = require('../models/User')
const { REFRESH_TOKEN_SECRET } = require('../env.js');
const { TOKEN_SECRET } = require('../env.js');


exports.createUser = async (name, email, password ) => {

    const user = await (User.create({name, email, password }));
    let token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET, { expiresIn: '1m' });
    let refreshToken = jwt.sign({ _id: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: '10d' });
    user.refreshToken = refreshToken;
    user.token = token;
    await user.save();
    return user;
}


exports.login = async ({ email, password }) => {


    let user = await User.findOne({ email, password });

    if (user) {

        let token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET, { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: '10d' });

        user.refreshToken = refreshToken;
        await user.save({ email, password, refreshToken });
        return  user;
    } else {
        throw new Error('No such user');
    }


};

exports.register = async ({ email, password }) => {

    let user = await User.findOne({ email, password });

    if (!user) {
        await User.create({ email, password });
        user = await User.findOne({ email, password });
        let token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET, { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: '10d' });
        
        user.refreshToken = refreshToken;
        await user.save();
        return { user, token, refreshToken };
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
   const user = await User.findById(id);
   user.role = data.role;
   user.phone = data.phone;
   user.gender = data.gender;

  await  user.save();
};

