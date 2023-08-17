// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare module 'antd'

declare module 'yup' {
  interface ArraySchema {
    unique(string): any
  }
}
