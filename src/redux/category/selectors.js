export const selectCategories = state => state.category.categories;
export const selectCategoriesIncomes = state => state.category.categories.incomes;
export const selectCategoriesExpenses = state => state.category.categories.expenses;
export const selectIsLoading = state => state.category.isLoading;
export const selectError = state => state.category.error;
console.log(selectCategories);
console.log(selectCategoriesIncomes);
console.log(selectCategoriesExpenses);
