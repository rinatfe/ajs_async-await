import read from "./read";
import json from "./json";
//import { reject, resolve } from "core-js/fn/promise";
export default class GameSavingLoader {
    constructor(){
    }

    load(){
        (async () => {
            try{
                const data = await read();
                const obj = await json(data);
                for(let key in JSON.parse(obj)){
                    this[key] = JSON.parse(obj)[key];
                }
            } catch(err){
                throw err;
            }

        })();
    }
}