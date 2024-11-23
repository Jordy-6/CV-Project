const { Validator } = require('jsonschema');
const validateDiplome = require('./diplome');
const validateCertification = require('./certification');
const validateCompany = require('./company');
const validateFormation = require('./formation');
const validateJob = require('./job');
const validateMission = require('./mission');

module.exports = {
    verifyCv: (cv) => {
        const validator = new Validator();
        const cvSchema = {
            type: 'object',
            properties: {
                userid: {
                    type: 'string',
                    minLength: 1,
                    errorMessage: 'User ID is incorrect or missing'
                },
                firstname: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 20,
                    errorMessage: 'Firstname is missing or incorrect'
                },
                lastname: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 20,
                    errorMessage: 'Lastname is missing or incorrect'
                },
                description: {
                    type: 'string',
                    minLength: 1,
                    errorMessage: 'Description is missing or incorrect'
                },
                diplomes: {
                    type: 'array',
                    items: { type: 'object' },
                    errorMessage: 'Diplomes should be an array of objects'
                },
                certifications: {
                    type: 'array',
                    items: { type: 'object' },
                    errorMessage: 'Certifications should be an array of objects'
                },
                formations: {
                    type: 'array',
                    items: { type: 'object' },
                    errorMessage: 'Formations should be an array of objects'
                },
                jobs: {
                    type: 'array',
                    items: { type: 'object' },
                    errorMessage: 'Jobs should be an array of objects'
                },
                missions: {
                    type: 'array',
                    items: { type: 'object' },
                    errorMessage: 'Missions should be an array of objects'
                },
                compagnies: {
                    type: 'array',
                    items: { type: 'object' },
                    errorMessage: 'Compagnies should be an array of objects'
                },
                visible: {
                    type: 'boolean',
                    errorMessage: 'Visibility status is missing or incorrect'
                }
            },
            required: ['firstname', 'lastname', 'description', 'visible']
        };

        // Étape 1 : Validation principale du schéma
        const result = validator.validate(cv, cvSchema);
        if (result.errors.length) {
            return {
                message: result.errors.map((err) => err.schema.errorMessage || err.message).join(', ')
            };
        }

        // Étape 2 : Validation des sous-champs
        const errors = [];

        if (cv.diplomes) {
            cv.diplomes.forEach((diplome) => {
                const error = validateDiplome(diplome);
                if (error) errors.push(error);
            });
        }

        if (cv.certifications) {
            cv.certifications.forEach((certification) => {
                const error = validateCertification(certification);
                if (error) errors.push(error);
            });
        }

        if (cv.formations) {
            cv.formations.forEach((formation) => {
                const error = validateFormation(formation);
                if (error) errors.push(error);
            });
        }

        if (cv.jobs) {
            cv.jobs.forEach((job) => {
                const error = validateJob(job);
                if (error) errors.push(error);
            });
        }

        if (cv.missions) {
            cv.missions.forEach((mission) => {
                const error = validateMission(mission);
                if (error) errors.push(error);
            });
        }

        if (cv.compagnies) {
            cv.compagnies.forEach((company) => {
                const error = validateCompany(company);
                if (error) errors.push(error);
            });
        }

        if (errors.length) {
            return { message: errors.join(', ') };
        }

        return null;
    }
};
