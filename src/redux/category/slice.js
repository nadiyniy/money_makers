const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { addedCategoryThunk, deleteCategoryThunk, updateCategoryThunk, fetchCategoriesThunk } = require('./operations');

const initialState = {
  categories: {
    incomes: [],
    expenses: [],
  },
  error: null,
  isLoading: false,
};

const slice = createSlice({
  name: 'category',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addedCategoryThunk.fulfilled, (state, { payload }) => {
        state.categories.incomes.push(payload.incomes);
        state.categories.expenses.push(payload.expenses);
      })
      .addCase(deleteCategoryThunk.fulfilled, (state, { payload }) => {
        state.categories.incomes = state.categories.incomes.filter(category => category.id !== payload.id);
        state.categories.expenses = state.categories.expenses.filter(category => category.id !== payload.id);
      })
      .addCase(updateCategoryThunk.fulfilled, (state, { payload }) => {
        const editCategoryIncomes = state.categories.incomes.find(category => category.id === payload.id);
        const editCategoryExpenses = state.categories.incomes.find(category => category.id === payload.id);
        editCategoryIncomes.categoryName = payload.categoryName;
        editCategoryExpenses.categoryName = payload.categoryName;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories.incomes = payload.incomes;
        state.categories.expenses = payload.expenses;
      })
      .addMatcher(
        isAnyOf(
          addedCategoryThunk.pending,
          deleteCategoryThunk.pending,
          updateCategoryThunk.pending,
          fetchCategoriesThunk.pending
        ),
        (state, _) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addedCategoryThunk.rejected,
          deleteCategoryThunk.rejected,
          updateCategoryThunk.rejected,
          fetchCategoriesThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          addedCategoryThunk.fulfilled,
          deleteCategoryThunk.fulfilled,
          updateCategoryThunk.fulfilled,
          fetchCategoriesThunk.fulfilled
        ),
        (state, _) => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const categoriesReducer = slice.reducer;
