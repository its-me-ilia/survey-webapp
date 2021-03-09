const fs = require('fs');
const path = require('path');
const {nanoid} = require('nanoid');
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const schema = require('../../assets/survey.json');

module.exports = {
    action: async (req,res) => {
        try {
            let {data} = req.body;   
            await writeFile(path.resolve(__dirname, '..', '..', 'surveys', `${nanoid(8)}.json`),JSON.stringify(data),'utf8');
            return res.sendStatus(200);
        } catch (error) {
            console.log(error.stack)
            return res.sendStatus(500);
        };
    },
    validation: (req,res,next) => {
        try {
            let { data } = req.body;
            for(let prop in data){
                let val = data[prop];
                //check if value exists
                if(!val && val !== 0){
                    return res.sendStatus(422);
                };
                //check if object has props other than requested ones
                let exists = schema.pages.findIndex((i) => i.questions[0].name === prop) !== -1;
                if(!exists){
                    return res.sendStatus(400);
                }
            };
            next();
        } catch (error) {
            console.log(error.stack)
            return res.sendStatus(500);
        }
    }
};