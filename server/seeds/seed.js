const db = require('../config/connections');
const { Question } = require('../models');

const questionData = require('./questionData.json');

db.once('open', async () => {
    await Question.deleteMany({});

    const questions = await Question.insertMany(questionData);

    console.log('Questions seeded');
    process.exit(0);
});