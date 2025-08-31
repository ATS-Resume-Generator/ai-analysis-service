const express = require('express');
const router = express.Router();
const { analyzeResume, extractSkills, suggestJobTitles } = require('../services/aiService');
const { validateAnalyze, validateExtractSkills, validateSuggestTitles } = require('../middleware/validation');

// Health check endpoint
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Analyze resume and extract skills
router.post('/analyze', validateAnalyze, async (req, res) => {
    try {
        const result = await analyzeResume(req.body.resumeText);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Extract skills from resume text
router.post('/extract-skills', validateExtractSkills, async (req, res) => {
    try {
        const skills = await extractSkills(req.body.resumeText);
        res.status(200).json({ skills });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Suggest job titles based on skills
router.post('/suggest-titles', validateSuggestTitles, async (req, res) => {
    try {
        const titles = await suggestJobTitles(req.body.skills);
        res.status(200).json({ titles });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;