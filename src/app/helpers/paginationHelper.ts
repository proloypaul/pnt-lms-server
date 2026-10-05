import { IpaginationOptions } from '../interface/paginationInterface'

enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}
type IoptionsResult = {
  page: number
  limit: number
  skip: number
  sortBy: string
  sortOrder: SortOrder
}

const calculatePagination = (options: IpaginationOptions): IoptionsResult => {
  const page = Number(options.page || 1)
  const limit = Number(options.limit || 10)
  const skip = (1 - page) * limit

  const sortBy = options.sortBy || 'createdAt'
  const sortOrder = options.sortOrder as SortOrder

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  }
}

export const paginationHelper = {
  calculatePagination,
}
