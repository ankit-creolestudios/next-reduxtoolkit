import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

export const createTask = createAsyncThunk("task/create", async (data) => {
  try {
    const res = await axios.post("/api/tasks", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    return {
      error: error,
    };
  }
});
export const readTask = createAsyncThunk("task/readTask", async () => {
  try {
    const res = await axios.get("/api/tasks");
    return res;
  } catch (error) {
    return {
      error: error,
    };
  }
});
export const readTaskById = createAsyncThunk(
  "task/readTaskbyid",
  async ({ id }) => {
    try {
      const res = await axios.get(`/api/tasks/${id}`);
      return res;
    } catch (error) {
      return {
        error: error,
      };
    }
  }
);
const initialState = {
  task: {},
  loading: false,
  success: false,
  error: false,
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    [createTask.pending]: (state) => {
      state.loading = true;
    },
    [createTask.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.task = payload;
      state.success = true;
    },
    [createTask.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [readTask.pending]: (state) => {
      state.loading = true;
    },
    [readTask.fulfilled]: (state) => {
      state.loading = false;
      state.task = payload;
      state.success = true;
    },
    [readTask.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
