import read from './read';
import json from './json';
// import { reject, resolve } from "core-js/fn/promise";
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const data = await read();
        const obj = await json(data);
        return new GameSaving(JSON.parse(obj));
      } catch (err) {
        throw err;
      }
    })();
  }
}
