import GameSavingLoader from './GameSavedLoader';
import GameSaving from './GameSaving';

GameSavingLoader.load().then(
  (saving) => saving,
  (err) => err
);