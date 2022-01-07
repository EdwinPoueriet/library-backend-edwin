const Sequelize = require('sequelize')
const {config} = require('../config')
const conf = config({env: 'edwinpoueriet.dev'})
const models = require('./sql')
const chalk = require('chalk');


let db = new Sequelize(conf.dbConfig)


 // create  db manually `CREATE DATABASE library;`

async function createModels() {
    for (let m of models) {
        try {
            let result = await db.query(String(m))
            console.log(chalk.green(`Created ${m}`))
        } catch (e) {
            if(e.message.match(/already exists/)){
                console.log(chalk.red(e.message))
            }
        }
    }
}

async function setup(){
    try {
        await createModels()
        process.exit(0)
    } catch (e) {
        process.exit(0)
    }
}

setup()
