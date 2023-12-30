import {Server} from 'http';
import app from './app';
import config from './config';

let server: Server;

async function main(){
    try{
        server = app.listen(config.port, () => {
            console.log(`companyWala server running port ${config.port}`)
        })
    }catch(err){
        console.log(`Failed to connect database`, err)
    }
}

main();