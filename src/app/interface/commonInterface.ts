export type IGenericResponseWithModel<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}
