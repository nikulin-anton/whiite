import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';
import { cardsSlice } from './cards';
import { transactionsSlice } from './transactions';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cards: cardsSlice.reducer,
    transactions: transactionsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
