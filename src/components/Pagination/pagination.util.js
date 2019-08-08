/**
 * Generate total page total number
 * @param total
 * @param itemPerPage
 * @returns {number}
 */
export const calculatePageNumber = (total, itemPerPage) => Math.ceil(total / itemPerPage);
