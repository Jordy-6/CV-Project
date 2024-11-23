const { Validator } = require('jsonschema');

const CompanySchema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 1, errorMessage: 'Company name is required' },
        location: { type: 'string', minLength: 1, errorMessage: 'Company location is invalid' },
        industry: { type: 'string', minLength: 1, errorMessage: 'Company industry is invalid' }
    },
    required: ['name']
};

const validateCompany = (company) => {
    const validator = new Validator();
    const result = validator.validate(company, CompanySchema);

    if (result.errors.length) {
        return result.errors.map((err) => err.schema.errorMessage || err.message).join(', ');
    }
    return null;
};

module.exports = validateCompany;
