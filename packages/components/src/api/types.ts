export interface Rsp<T, V = {}> {
  data: T
  multipleData: V
  multipleMessage: {}
  isSuccessful: boolean
  message: string | number | null
  code: string | number | null
}