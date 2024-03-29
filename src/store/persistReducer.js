import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'test',
      storage,
      whitelist: ['auth', 'book'],
    },
    reducers
  );

  return persistedReducer;
};
