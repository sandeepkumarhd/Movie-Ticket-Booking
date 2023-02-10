import { createSlice, configureStore } from "@reduxjs/toolkit";
let allMovieSeats = []
for(let i=0;i<=50;i++){
allMovieSeats.push(i)
}

const initialStateOne = {
  priceOne: 0,
  priceIncrease: 0,
  movieName: "",
  allMovieSeats,
  IsSelected: false,
  sectionA: [],
  sectionB:[],
  sectionC:[],
  minutes:5,
  seconds:60,
};

const sliceReducerOne = createSlice({
  name: "priceOne",
  initialState: initialStateOne,
  reducers: {
    increment(state) {
      state.priceOne++;
    },
    increseby(state, action) {
      state.priceIncrease = state.priceIncrease + action.payload;
    },
    addMovie(state, action) {
      state.movieName = action.payload;
    },
    sectionA(state, action) {
      state.sectionA.push(action.payload);
    },
    sectionB(state, action) {
      state.sectionB.push(action.payload);
    },
    sectionC(state, action) {
      state.sectionC.push(action.payload);
    },
    timerHandler(state,action){
      setInterval(() => {
        state.seconds =state.seconds- action.payload;
        if (state.seconds <= 0 && state.minutes > 0) {
          state.minutes -= 1;
          state.seconds = 60;
        }
        console.log(state.seconds);
      }, 1000);
    },
    selectedHandler(state){
state.IsSelected = !state.IsSelected
    }
  },
});

const store = configureStore({
  reducer: sliceReducerOne.reducer,
});

export const reducerAction = sliceReducerOne.actions;
export default store;
