import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  facts: [
    { id: 1, factText: "Прообразом Чубакки стал пёс режиссёра" },
    {
      id: 2,
      factText:
        "Актёрам разрешили подобрать любимый цвет для своих световых мечей",
    },
    {
      id: 3,
      factText:
        "В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину",
    },
    {
      id: 4,
      factText:
        "Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу",
    },
    {
      id: 5,
      factText:
        "Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок",
    },
  ],

  getFacts: null,
};

const starWarsFactsSlice = createSlice({
  name: "starWarsFacts",
  initialState,
  reducers: {
    numberOfFacts: (state, action) => {
      if (Number(action.payload) < 1 || Number(action.payload) > 5)
        state.getFacts = null;
      state.getFacts = state.facts.slice(0, Number(action.payload));
    },
  },
});

export const { numberOfFacts } = starWarsFactsSlice.actions;
export default starWarsFactsSlice.reducer;
