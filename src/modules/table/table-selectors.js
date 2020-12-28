import { createSelector } from 'reselect';

const isLoading = (state) => state.table.isLoading;

export const getIsLoading = createSelector(isLoading, 
  (isLoading) => isLoading,
);
