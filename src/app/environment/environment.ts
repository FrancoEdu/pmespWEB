interface Environment{
  apiURL: string,
  timeOutAPI: number
}

export const _environment: Environment = {
  apiURL: 'https://localhost:7080/api',
  timeOutAPI: 90000
}
