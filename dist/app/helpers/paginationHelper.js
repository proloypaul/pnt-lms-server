'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.paginationHelper = void 0
var SortOrder
;(function (SortOrder) {
  SortOrder['ASC'] = 'asc'
  SortOrder['DESC'] = 'desc'
})(SortOrder || (SortOrder = {}))
const calculatePagination = options => {
  const page = Number(options.page || 1)
  const limit = Number(options.limit || 10)
  const skip = (1 - page) * limit
  const sortBy = options.sortBy || 'createdAt'
  const sortOrder = options.sortOrder
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  }
}
exports.paginationHelper = {
  calculatePagination,
}
