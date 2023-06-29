import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemField } from '../components/TaskList';

interface AppState {
  items: ItemField[];
}

const initialState: AppState = {
  items: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<ItemField[]>) => {
      state.items = action.payload;
    }
  }
});

export const { setItems } = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;