/* eslint-disable @typescript-eslint/no-explicit-any */

type APIBaseResponse<T extends boolean> = {
  success: T
  status: ResponseInit["status"]
}

interface SuccessPayload<T> {
  data: T extends undefined ? never : T
  message?: string
}

interface ErrorPayload<T = any> {
  error?: T
  message?: string
}

export type APISuccessResponse<T> = APIBaseResponse<true> & SuccessPayload<T>
export type APIErrorResponse<T = any> = APIBaseResponse<false> & ErrorPayload<T>

export type APIResponse<DataType, ErrorType = any> =
  | APISuccessResponse<DataType>
  | APIErrorResponse<ErrorType>

export default function sendResponse<
  DataType,
  ErrorType,
  Success extends 0 | 1,
>(
  success: Success,
  payload: Success extends 1
    ? SuccessPayload<DataType>
    : ErrorPayload<ErrorType>,
  status: ResponseInit["status"]
) {
  return Response.json(
    {
      success: Boolean(success),
      ...payload,
      status,
    },
    { status }
  ) as unknown as APISuccessResponse<DataType> | APIErrorResponse<ErrorType>
}

export class APIError {
  success = false
  status: ResponseInit["status"]
  message?: ErrorPayload["message"]
  error?: ErrorPayload["error"]
  constructor({
    status,
    message,
    error,
  }: { status: ResponseInit["status"] } & ErrorPayload) {
    this.status = status
    this.message = message
    this.error = error
  }
}
