const Joi = require('joi');

const analyzeSchema = Joi.object({
    resume: Joi.string().required(),
});

const extractSkillsSchema = Joi.object({
    resumeText: Joi.string().required(),
});

const suggestTitlesSchema = Joi.object({
    skills: Joi.array().items(Joi.string()).required(),
});

const validateAnalyze = (req, res, next) => {
    const { error } = analyzeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateExtractSkills = (req, res, next) => {
    const { error } = extractSkillsSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateSuggestTitles = (req, res, next) => {
    const { error } = suggestTitlesSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = {
    validateAnalyze,
    validateExtractSkills,
    validateSuggestTitles,
};