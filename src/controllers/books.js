const micro = require('micro');
const {db} = require('../db')
const fs = require('fs');
const util = require('util');
const path = require('path');

const readFile =  util.promisify(fs.readFile);
const fullPath = path.dirname(require.main.filename);
const regexResp = /^(.*?)node_modules/.exec(fullPath);
const appRoot = regexResp ? regexResp[1] : fullPath;

async function getBooks (req, res) {

    try {
        const results = await db.Book.findAll({
            ...req.params.id ? { where: {
                    id: req.params.id
                }}:{}
            ,
            order: [['id', 'ASC']],
            ...req.params.pageNumber ? {include: [{
                    model: db.Pages,
                    where: {
                        pageNumber: req.params.pageNumber
                    }
                }]} : {}
        })
        if(req.params.type && req.params.type === 'html'){

            let info = JSON.parse(JSON.stringify(results))
            let folder = info[0].folderName;
            let doc = info[0].pages[0].fileName;
            const file = await readFile(`${appRoot}src/data/${folder}/html/${doc}.html`, 'utf8');
            micro.send(res, 200, file)
        }//add other formats here when needed
        else{

            micro.send(res, 200, results)
        }

    }catch(e){
        micro.send(res,404,e)
    }

}

module.exports = {getBooks};
