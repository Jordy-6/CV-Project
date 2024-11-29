const { verifyRecommendation } = require('../validator/recommendation');
const RecommendationModel = require('../models/Recommendation');

module.exports = {
    createRecommendation: async (req, res) => {
        try {
            const infoNotValid = verifyRecommendation(req.body);

            if (infoNotValid) {
                return res.status(400).send({
                    error: infoNotValid.message
                });
            }

            const { firstname, lastname, id } = req.user;
            const newRecommendation = new RecommendationModel({
                ...req.body,
                userid: {
                    firstname,
                    lastname,
                    id
                },
                cvid: req.params.id
            });

            await newRecommendation.save();

            return res.status(201).send({
                success: true,
                recommendation: newRecommendation
            });
        } catch (error) {
            return res.status(500).send({
                message: error.message
            });
        }
    },

    getAllRecommendationsByCv: async (req, res) => {
        try {
            const recommendations = await RecommendationModel.find({ cvid: req.params.id });
            return res.send(recommendations);
        } catch (error) {
            return res.status(500).send({
                message: error.message || 'Cannot retrieve all recommendations'
            });
        }
    },

    deleteRecommendation: async (req, res) => {
        try {
            const recommendationId = req.params.id;
            const recommendation = await RecommendationModel.findByIdAndDelete(recommendationId);

            if (!recommendation) {
                return res.status(404).send({
                    message: `Recommendation with id : ${recommendationId} not found`
                });
            }

            return res.status(200).send({
                message: 'Recommendation was successfully deleted',
                data: recommendation
            });
        } catch (error) {
            return res.status(500).send({
                message: error.message
            });
        }
    }
};
