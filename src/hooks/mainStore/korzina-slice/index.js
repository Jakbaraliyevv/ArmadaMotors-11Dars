import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

const initialState = {
  data: JSON.parse(localStorage.getItem("korzina")) || [],
};

const korzina = createSlice({
  name: "korzina",
  initialState,
  reducers: {
    getData: (state, action) => {
      console.log(action);

      const dataFind = state.data.find((item) => item.id !== action);

      if (!dataFind) {
        state.data = [...state.data, { ...payload, userPrice: price }];

        notification.success({
          message: "Maxsulot savtaga qo'shildi",
        });

        localStorage.setItem("korzina", JSON.stringify(state.data));
      } else {
        notification.error({
          message: "Allqachon savtaga qo'shilgan",
        });
      }
    },
  },
});

export const { getData } = korzina.actions;
export default korzina.reducer;
