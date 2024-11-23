const UserModel = require('../models/User');
const verifyUser = require('../validator/user');

module.exports = {
    getMyInfos: async (req, res) => {
        try {
            const { id, firstName, lastName, email } = req.user;
            res.send({
                id,
                firstName,
                lastName,
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
                req.status(400).send({
                    error: isInfoInvalid.message
                });
            }

            const { id } = req.user;

            const updatedInfos = await UserModel.findByIdAndUpdate(id, req.body, {
                new: true
            });

            if (!updatedInfos) {
                res.status(404).send({
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
