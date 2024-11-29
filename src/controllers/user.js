const UserModel = require('../models/User');
const { verifyUser } = require('../validator/user');
const bcrypt = require('bcrypt');

module.exports = {
    getMyInfos: async (req, res) => {
        try {
            const { id, firstname, lastname, email } = req.user;
            console.log;
            res.send({
                id,
                firstname,
                lastname,
                email
            });
        } catch (error) {
            res.status(500).send({
                message: error.message || 'Some error occurred on getting user informations'
            });
        }
    },

    updateInfos: async (req, res) => {
        try {
            const isInfoInvalid = verifyUser(req.body);
            if (isInfoInvalid) {
                return res.status(400).send({
                    error: isInfoInvalid.message
                });
            }

            const userOldPassword = await UserModel.findById(req.user.id);
            const isPasswordDuplicated = await bcrypt.compare(req.body.password, userOldPassword.password);

            if (isPasswordDuplicated) {
                return res.status(403).send({
                    error: 'You cannot use your old password'
                });
            }

            req.body.password = await bcrypt.hash(req.body.password, 10);
            const { id } = req.user;

            const updatedInfos = await UserModel.findByIdAndUpdate(id, req.body, {
                new: true
            });

            if (!updatedInfos) {
                return res.status(404).send({
                    message: `User with id : ${id} not found`
                });
            }

            res.status(200).send({
                message: 'User infos was successfully updated',
                data: updatedInfos
            });
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
};
