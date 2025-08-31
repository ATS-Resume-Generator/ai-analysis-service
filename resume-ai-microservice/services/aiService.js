const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/YOUR_MODEL_NAME';
const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY;

async function analyzeResume(resumeText) {
    try {
        const response = await axios.post(HUGGING_FACE_API_URL, {
            inputs: resumeText,
        }, {
            headers: {
                'Authorization': `Bearer ${HUGGING_FACE_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error analyzing resume: ' + error.message);
    }
}

async function suggestJobTitles(skills) {
    try {
        const response = await axios.post(HUGGING_FACE_API_URL, {
            inputs: skills,
        }, {
            headers: {
                'Authorization': `Bearer ${HUGGING_FACE_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error suggesting job titles: ' + error.message);
    }
}

module.exports = {
    analyzeResume,
    suggestJobTitles,
};