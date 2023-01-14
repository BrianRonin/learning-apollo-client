import {
  makeVar,
  useReactiveVar,
} from '@apollo/client'

export class ApolloVariables<i> {
  public schema
  public name
  public variable

  constructor(schema: i, name: string) {
    this.schema = { __typename: '', ...schema }
    this.name = name
    this.variable = makeVar(schema)
  }

  get var() {
    this.hydrate()
    return this.variable()
  }

  set var(v: Partial<i>) {
    const value = { ...this.var, ...v } as i
    this.variable(value)
    localStorage.setItem(
      this.name,
      JSON.stringify(value),
    )
  }

  reset() {
    localStorage.removeItem(this.name)
    this.variable(this.schema)
  }

  get use() {
    this.hydrate()
    return () => useReactiveVar(this.variable)
  }

  hydrate() {
    if (typeof window !== 'undefined') {
      const storeVariable = JSON.parse(
        localStorage.getItem(this.name) ?? '{}',
      )
      switch (storeVariable) {
        case !storeVariable:
          this.reset()
          break
        case storeVariable === this.variable:
          break
        default:
          this.variable({
            ...this.schema,
            ...storeVariable,
          })
          break
      }
    }
  }
}
