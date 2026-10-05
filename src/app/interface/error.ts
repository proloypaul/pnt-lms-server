export type errMessageGeneric = { path: string | number; message: string }

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessage: errMessageGeneric[]
}
