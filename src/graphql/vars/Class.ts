import {
  makeVar,
  useReactiveVar,
} from '@apollo/client'

export class ApolloVariables<i> {
  public schema
  public name
  public variable

  constructor(schema: i, name: string) {
    this.schema = schema
    this.name = name
    this.variable = makeVar(schema)
  }

  get var() {
    return this.variable()
  }

  set var(v: typeof this.schema) {
    this.variable(v)
    localStorage.setItem(
      this.name,
      JSON.stringify(v),
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
    const storeVariable = JSON.parse(
      localStorage.getItem(this.name) ?? '',
    )
    switch (storeVariable) {
      case !storeVariable:
        this.reset()
        break
      case storeVariable === this.var:
        break
      default:
        this.var = {
          ...this.var,
          ...storeVariable,
        }
        break
    }
  }
}
