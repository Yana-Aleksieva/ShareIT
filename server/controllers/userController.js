const router = require('express').Router();
const userService = require('../services/userService')
const {COOKIE_NAME} = require('../env');


router.post('/users/login', async (req, res) => {
    let { email, password } = req.body;
    let user = await userService.login({ email, password });

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: user.refreshToken

    });
});

router.post('/users/register', async (req, res) => {

    let {name, email, password } = req.body;

     try {

        const user = await userService.createUser(name, email, password );
        res.cookie(COOKIE_NAME, user.refreshToken, {httpOnly: true})
      
        res.json({
            email: user.email,
            _id: user._id,
            refreshToken: user.refreshToken
        });

    } catch (err) {
        console.log(err);
    }
});

router.get('/users/logout', (req, res) => {
    res.json({ });
});

router.post('/refresh', async (req, res) => {
    console.log(req.body);
    let refreshToken = req.body.refreshToken;

    let { accessToken, refreshToken: newRefreshToken } = await userService.refresh(refreshToken);

    res.json({
        accessToken,
        refreshToken: newRefreshToken,
    });
});

router.post('/refresh', async (req, res) => {
    console.log(req.body);
    let refreshToken = req.body.refreshToken;

    let { token, refreshToken: newRefreshToken } = await userService.refresh(refreshToken);

    res.json({
        token,
        refreshToken: newRefreshToken,
    });
});


module.exports = router;