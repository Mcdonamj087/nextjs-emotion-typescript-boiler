/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  APIError,
  type APIErrorResponse,
  type APIResponse,
} from "@/utils/sendResponse"

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
type Endpoint = `/${string}`
type Data = Record<string, any>
type Options = Omit<RequestInit, "method" | "body">

async function apiFetch<DataType, ErrorType = any>(
  method: "GET" | "DELETE",
  endpoint: Endpoint,
  options?: Options
): Promise<APIResponse<DataType, ErrorType>>

async function apiFetch<DataType, ErrorType = any>(
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  endpoint: Endpoint,
  data: Data,
  options?: Options
): Promise<APIResponse<DataType, ErrorType>>

async function apiFetch<DataType, ErrorType = any>(
  method: RequestMethod,
  endpoint: Endpoint,
  arg3?: Data | Options,
  options?: Options
) {
  if (!process.env.API_URL) {
    throw new Error("API_URL env var not found")
  }

  const URL = process.env.API_URL + endpoint
  let data: Data | undefined
  let requestOptions: Options | undefined

  if (method === "GET") {
    requestOptions = arg3
    try {
      const res = await fetch(URL, requestOptions)
      const json: APIResponse<DataType, ErrorType> = await res.json()
      if (!res.ok) {
        throw new APIError({
          message: json.message || "Network request was not OK",
          error: (json as APIErrorResponse<ErrorType>).error || undefined,
          status: res.status,
        })
      }
      return json
    } catch (error) {
      return { ...(error as APIError) }
    }
  } else {
    data = arg3
    try {
      const res = await fetch(URL, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        ...options,
      })

      const json: APIResponse<DataType, ErrorType> = await res.json()
      if (!res.ok) {
        throw new APIError({
          message: json.message || "Network request was not OK",
          error: (json as APIErrorResponse<ErrorType>).error || undefined,
          status: res.status,
        })
      }
      return json
    } catch (error) {
      return { ...(error as APIError) }
    }
  }
}

export default apiFetch
