const { verifyRecommendation } = require('../validator/recommendation');
const RecommendationModel = require('../models/Recommendation');

module.exports = {
    createRecommendation: async (req, res) => {
        try {
            const infoNotValid = verifyRecommendation(req.body);

            if (infoNotValid) {
                res.status(400).send({
                    error: infoNotValid.message
                });
            }

            const newRecommendation = new RecommendationModel(req.body);
            newRecommendation.userid = req.user;
            newRecommendation.cvid = req.params.id;
            newRecommendation.save();

            const { id, firstname, lastname } = req.user;
            newRecommendation.userid = {
                id,
                firstname,
                lastname
            };

            res.status(201).send({
                success: true,
                recommendation: newRecommendation
            });
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    },

    getAllRecommendationsByCv: async (req, res) => {
        try {
            const recommendations = await RecommendationModel.find({ cvid: req.params.id });
            res.send(recommendations);
        } catch (error) {
            res.status(500).send({
                message: error.message || 'Cannot retrieve all recommendations'
            });
        }
    },

    deleteRecommendation: async (req, res) => {
        try {
            const recommendationId = req.params.id;
            const recommendation = await RecommendationModel.findByIdAndDelete(recommendationId);

            if (!recommendation) {
                res.status(404).send({
                    message: `Recommendation with id : ${recommendationId} not found`
                });
            }

            res.status(200).send({
                message: 'Recommendation was successfully deleted',
                data: recommendation
            });
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    }
};
