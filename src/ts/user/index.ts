export type Permission = ''

export type User = {
  id: number
  createdAt: string
  login: string
  email: string
  avatar: string
  displayName: string

  balance: number
  role: number
  discord: string
  twofactor: boolean
  mode: string
}