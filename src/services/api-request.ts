import Axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'

export interface IResponse<T> {
  ok: boolean
  data: T
  msg: string
}

export type AxiosPromise<T = unknown> = Promise<AxiosResponse<T>['data']>

export type ParamsHeader = { [key: string]: string }

export default class APIRequest {
  private axiosInstance: AxiosInstance
  private controller = new AbortController()
  static withHeader: { [key: string]: string }

  constructor() {
    this.axiosInstance = Axios.create({
      timeout: 30000,
      signal: this.controller.signal,
      baseURL: 'https://5eed24da4cbc340016330f0d.mockapi.io',
    })
  }
  public async get<T>(
    url: string,
    headers?: AxiosRequestConfig<T>,
  ): AxiosPromise<T> {
    const response = await this.axiosInstance.get(url, headers)
    return response.data
  }
  public async post<T, D = unknown>(
    url: string,
    data?: D,
    headers?: AxiosRequestConfig<D>,
  ): AxiosPromise<T> {
    const response = await this.axiosInstance.post(url, data, headers)
    return response.data
  }
}
