const User = require('../models/user')
const hcmutsso = require('../models/HCMUT_SSO') 
const bycrypt = require('bcrypt')
const { multipleMongooseObject } = require('../util/mongoose');
const { response } = require('express');

class authenticationController {
    async signup(req, res, next) {
        const data = {
            SignUpID: req.body.id,
            password: req.body.password,
        };
        const HCMUTUser = await hcmutsso.findOne({ID: req.body.id});
        const UserExit = await User.findOne({ID: req.body.id});
        if (HCMUTUser === null){
            return res.status(404).send('ID is not registered');
        };
        if (UserExit !== null) {
            return res.status(409).send('ID already exist');
        };
        const salt = 8;
        const hashPassword = await bycrypt.hash(data.password, salt);
        const newUser = new User({
            _UserID: HCMUTUser.ID,
            _password: hashPassword,
            _Name: HCMUTUser.Name,
            _PaperLeft: 1000,
            _TotalUsed: 0
        });
        newUser.save();
        res.status(201).send('ID succesfully registered');
        res.redirect('sigin')
    }
    async signin(req,res,next){
        const data = {
            SignInID: req.body.ID,
            password: req.body.password
        };
        const user = User.findOne({name: SignInID});  
        if (user === null)
            return res.status(404).send('User id not found');
        const validPassword = await bycrypt.compare(password, user._password);
        if (!validPassword) {
            return res.status(401).send('Password is incorrect');
        }
        req.session.user = user._Name;
    }

}

module.exports = new authenticationController()