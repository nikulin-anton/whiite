import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCards } from '../api/cards';
import { Card } from '../interfaces/Card';

interface InitialState {
  items: Card[];
  loading: boolean;
}

const initialState: InitialState = {
  items: [],
  loading: false,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const fetchCards = createAsyncThunk('fetchCards', (userId: string) =>
  getCards(userId)
);
