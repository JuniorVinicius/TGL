import { createSlice } from "@reduxjs/toolkit";

const showUpdate = createSlice({
  name: "showUpdate",
  initialState: { showUpdateFields: false },
  reducers: {
    toggle(state) {
      state.showUpdateFields = !state.showUpdateFields;
    },
  },
});

export const showUpdateActions = showUpdate.actions;

export default showUpdate;