const { Validator } = require('jsonschema');

const CertificationSchema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 1, errorMessage: 'Certification name is missing or invalid' },
        issuedBy: { type: 'string', minLength: 1, errorMessage: 'Certification issuer is invalid' },
        year: { type: 'integer', minimum: 1900, errorMessage: 'Certification year must be a valid year or is missing' }
    },
    required: ['name', 'year']
};

const validateCertification = (certification) => {
    const validator = new Validator();
    const result = validator.validate(certification, CertificationSchema);

    if (result.errors.length) {
        return result.errors.map((err) => err.schema.errorMessage || err.message).join(', ');
    }
    return null;
};

module.exports = validateCertification;
