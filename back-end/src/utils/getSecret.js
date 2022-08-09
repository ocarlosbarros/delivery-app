const fs = require('fs/promises');

const getSecret = async () => {
    const content = await fs.readFile('jwt.evaluation.key', 'utf-8');
    
    if (!content) throw new Error('File not exists or not content');

    return content;
};

module.exports = getSecret;