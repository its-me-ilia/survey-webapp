const schema = require('../../assets/survey.json');

module.exports = {
    action: async (req,res) => {
        try {
            return res.status(200).json(schema);
        } catch (error) {
            return res.sendStatus(500);
        };
    }
}