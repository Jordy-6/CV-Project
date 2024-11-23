const { verifyUser } = require('../validator/user');
const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
        try {
            const newUser = req.body;
            const isUserNotValid = verifyUser(newUser);

            if (isUserNotValid) {
                return res.status(400).send({
                    error: isUserNotValid.message
                });
            }

            newUser.password = await bcrypt.hash(newUser.password, 10);
            const { id, lastname, firstname, email } = await UserModel.create(newUser);

            res.send({
                success: true,
                user: {
                    id,
                    lastname,
                    firstname,
                    email
                }
            });
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(401).send({ message: "User doesn't exist" });
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                return res.status(401).send({ message: 'Password is wrong' });
            }

            const userData = {
                email: user.email
            };
            const secret = process.env.JWT_SECRET || 'secret';
            const jwtData = {
                expiresIn: process.env.JWT_TIMEOUT_DURATION || '1h'
            };

            const token = jwt.sign(userData, secret, jwtData);

            res.status(200).send({
                message: 'Successfully logged in',
                user: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    token
                }
            });
        } catch (error) {
            res.status(500).send({
                message: error.message || 'some error occurred while logging user'
            });
        }
    }
};
