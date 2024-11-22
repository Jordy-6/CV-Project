const { Validator } = require('jsonschema');

module.exports = {
    verifyRecommendation: (cv) => {
        let validator = new Validator();
        let RecommendationSchema = {
            type: 'object',
            properties: {
                userid: {
                    type: 'string',
                    minLength: 1,
                    errorMessage: 'User ID is incorrect or missing'
                },
                cvid: {
                    type: 'string',
                    minLength: 1,
                    errorMessage: 'CV ID is incorrect or missing'
                },
                description: {
                    type: 'string',
                    minLength: 5,
                    errorMessage: 'Description is missing or incorrect'
                }
            },
            required: ['description']
        };
        let result = validator.validate(cv, RecommendationSchema);

        // if validation failed
        if (Array.isArray(result.errors) && result.errors.length) {
            let failedInputs = '';

            result.errors.forEach((error) => {
                failedInputs += (error.schema.error || error.message) + ', ';
            });
            return {
                message: failedInputs
            };
        }
    }
};
