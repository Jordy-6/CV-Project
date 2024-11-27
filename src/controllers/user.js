const UserModel = require('../models/User');
const { verifyUser } = require('../validator/user');

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
