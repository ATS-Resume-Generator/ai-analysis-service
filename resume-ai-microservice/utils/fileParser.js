const fs = require('fs');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');

const parsePDF = (filePath) => {
    return new Promise((resolve, reject) => {
        const dataBuffer = fs.readFileSync(filePath);
        pdf(dataBuffer).then(data => {
            resolve(data.text);
        }).catch(err => {
            reject(err);
        });
    });
};

const parseDOCX = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                return reject(err);
            }
            mammoth.extractRawText({ buffer: data })
                .then(result => {
                    resolve(result.value);
                })
                .catch(err => {
                    reject(err);
                });
        });
    });
};

const parseTXT = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

const parseFile = async (filePath) => {
    const fileExtension = filePath.split('.').pop().toLowerCase();
    switch (fileExtension) {
        case 'pdf':
            return await parsePDF(filePath);
        case 'docx':
            return await parseDOCX(filePath);
        case 'txt':
            return await parseTXT(filePath);
        default:
            throw new Error('Unsupported file type');
    }
};

module.exports = {
    parseFile
};