export type Auth = {
  email: string
  password: string
}

declare module 'next-auth' {
  interface User extends Auth {}
  interface Session {
    auth: string | null
    user: {
      name: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    credentials: Auth
    expire: number
    auth: string | null
    user: {
      name: string
    }
  }
}
