const CvModel = require('../models/Cv');
const { verifyCv } = require('../validator/cv');

module.exports = {
    createCv: async (req, res) => {
        try {
            const infoNotValid = verifyCv(req.body);

            if (infoNotValid) {
                res.status(400).send({
                    error: infoNotValid.message
                });
            }

            const { id } = req.user;

            const newCv = new CvModel({
                ...req.body,
                userid: id
            });
            newCv.save();

            res.status(201).send({
                success: true,
                cv: newCv
            });
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    },

    getAllCv: async (req, res) => {
        try {
            const cv = await CvModel.find({ visible: true });
            res.send(cv);
        } catch (error) {
            res.status(500).send({
                message: error.message || 'Cannot retrieve all CVs'
            });
        }
    },

    getAllCvByUser: async (req, res) => {
        try {
            const cv = await CvModel.find({ userid: req.params.id });
            res.send(cv);
        } catch (error) {
            res.status(500).send({
                message: error.message || 'Cannot retrieve all of your CVs'
            });
        }
    },

    getCvById: async (req, res) => {
        try {
            const cvId = req.params.id;
            const cv = await CvModel.findById(cvId);
            if (!cv) {
                return res.status(404).send({
                    message: `Cv with id: ${cvId} not found`
                });
            }
            res.send({
                cv: cv
            });
        } catch (error) {
            res.status(500).send({
                message: error.message || `Cannot retrive cv with id: ${req.params.id}`
            });
        }
    },

    updateCv: async (req, res) => {
        try {
            const cvId = req.params.id;
            const infoNotValid = verifyCv(req.body);

            if (infoNotValid) {
                res.status(400).send({
                    error: infoNotValid.message
                });
            }

            const updatedCv = await CvModel.findByIdAndUpdate(cvId, req.body, {
                new: true
            });

            if (!updatedCv) {
                res.status(404).send({
                    message: `CV with id : ${cvId} not found`
                });
            }

            res.status(200).send({
                message: 'CV was successfully updated',
                data: updatedCv
            });
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    },

    deleteCv: async (req, res) => {
        try {
            const cvId = req.params.id;
            const cv = await CvModel.findByIdAndDelete(cvId);

            if (!cv) {
                res.status(400).send({
                    message: `CV with id : ${cvId} not found`
                });
            }

            res.status(200).send({
                message: 'CV was successfully deleted',
                data: cv
            });
        } catch (error) {
            res.status(500).send({
                message: error.message || `Error deleting cv with id=${req.params.id}`
            });
        }
    }
};
