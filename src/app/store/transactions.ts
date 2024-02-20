import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTransactions } from '../api/transactions';
import { Transaction } from '../interfaces/Transaction';

interface InitialState {
  items: Transaction[];
  loading: boolean;
}

const initialState: InitialState = {
  items: [],
  loading: false,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const fetchTransactions = createAsyncThunk(
  'fetchTransactions',
  (userId: string) => getTransactions(userId)
);
