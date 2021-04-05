import GameSavingLoader from './index';
import json from './json';
import read from './read';

test('asyn/await', () => {
  (async () => {
    GameSavingLoader.load();
    expect(GameSavingLoader.load()).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
  })();
});
