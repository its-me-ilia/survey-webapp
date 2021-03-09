const router = require('express').Router();
const survey = require('../controllers/survey');

//survey
router.post('/api/v1/survey/submit', survey.submit.validation , survey.submit.action);
router.get('/api/v1/survey/get-schema', survey.getSchema.action);

module.exports = router;