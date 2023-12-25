interface Environment{
  apiURL: string,
  timeOutAPI: number
}

export const _environment: Environment = {
  apiURL: 'http://localhost:5273/api',
  timeOutAPI: 90000
}
