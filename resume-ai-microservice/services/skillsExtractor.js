const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

function extractSkills(resumeText) {
    const skillsDatabase = [
        'JavaScript', 'Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS', 
        'React', 'Node.js', 'Machine Learning', 'Data Analysis', 
        'Project Management', 'Communication', 'Teamwork', 'Problem Solving'
    ];

    const tokens = tokenizer.tokenize(resumeText.toLowerCase());
    const extractedSkills = skillsDatabase.filter(skill => 
        tokens.includes(skill.toLowerCase())
    );

    return extractedSkills;
}

module.exports = extractSkills;