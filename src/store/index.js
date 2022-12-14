import { configureStore } from "@reduxjs/toolkit";
import {
  changeSearchTerm,
  addCar,
  removeCar,
  carReducer,
} from "./slices/carSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});

export { store, addCar, removeCar, changeCost, changeName, changeSearchTerm };
