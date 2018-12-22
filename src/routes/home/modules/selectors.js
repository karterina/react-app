// import { createSelector } from 'reselect';

/**
 * Selector: select the api status
 * @param state
 * @returns {string}
 */
export const selectApiStatus = state => state.data.api.status;
