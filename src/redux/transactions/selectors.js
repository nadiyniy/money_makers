export const selectTransactions = state => state.transaction.transactions;
export const selectTransactionsLoading = state => state.transaction.isLoading;
export const selectTransactionsError = state => state.transaction.error;
export const selectDate = state => state.transaction.inputDate;
export const selectFilter = state => state.transaction.filter;
export const selectIsLoading = state => state.transaction.isLoading;
