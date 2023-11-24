export const selectCategories = state => state.categories.categories;
export const selectCategoriesIncomes = state => state.categories.categories.incomes;
export const selectCategoriesExpenses = state => state.categories.categories.expenses;
export const selectIsLoading = state => state.categories.isLoading;
export const selectError = state => state.categories.error;
