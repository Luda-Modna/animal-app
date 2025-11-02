import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const PET_SLICE_NAME = 'pets';

const initialState = {
  pets: [],
  petTypes: [],
  isFetching: false,
  error: null,
};

export const getTypesThunk = createAsyncThunk(
  `${PET_SLICE_NAME}/get/types`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getTypes();
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const createPetThunk = createAsyncThunk(
  `${PET_SLICE_NAME}/create`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.createPet(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const petsSlice = createSlice({
  name: PET_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    builder.addCase(getTypesThunk.fulfilled, (state, { payload }) => {
      state.petTypes = [...payload];
      state.error = null;
    });
    builder.addCase(getTypesThunk.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(createPetThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createPetThunk.fulfilled, (state, { payload }) => {
      state.pets.push(payload);
      state.isFetching = false;
    });
    builder.addCase(createPetThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
  },
});

const { reducer } = petsSlice;

export default reducer;
