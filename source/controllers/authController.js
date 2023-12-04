const User = require('../models/user')
const hcmutsso = require('../models/HCMUT_SSO') 
const bycrypt = require('bcrypt')
const { multipleMongooseObject } = require('../util/mongoose');
const { response } = require('express');

// Not Used Do not call !// 

class authenticationController {
    async signup(req, res, next) {
        res.send(403).send("Forbidden");
        return;
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
    async login(req, res, next) {
        try {
            const data = {
                SignInID:  req.body.ID || '2181367', 
                password:  req.body.password || '123456'  
            };
            const user = await User.findOne({ UserID: data.SignInID });
            if (!user) {
                return res.status(404).send('User id not found');
            }
            const validPassword = await bycrypt.compare(data.password, user.password);
            if (!validPassword) {
                return res.status(401).send('Password is incorrect');
            } else {
                const userInfo = {
                    UserID: user.UserID,
                    name: user.Name,
                    PaperLeft: user.PaperLeft,
                    TotalUsed: user.TotalUsed,
                    BirthDate: user.Birthdate,
                    email: user.Email,
                    contactNumber: user.ContactNumber
                };
                return res.status(200).send(userInfo);
            }
        } catch (err) {
            res.status(500).send('Internal Server Error');
            console.log(err);
        }
    }
    async EncryptPassword(req, res, next) {
        res.status(403).send("Forbidden");
        return;
        try {
            const users = await User.find({});
            const salt = 8;
            for (const user of users) {
                const { UserID, password } = user;
                const hashedPassword = await bycrypt.hash(password, salt);
                await User.findOneAndUpdate({ UserID }, { password: hashedPassword });
            }
            res.status(200).send('Successfully encrypt password');
        } catch (err) {
            res.status(500).send('Internal Server Error');
            console.log(err);
        }
    }
}

module.exports = new authenticationController()