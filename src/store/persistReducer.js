import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'test',
      storage,
      whitelist: ['auth', 'library'],
    },
    reducers
  );

  return persistedReducer;
};
