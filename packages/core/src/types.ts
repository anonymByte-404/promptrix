export type Validator = (input: string) => string | boolean

export interface PromptConfig {
  type?: 'text'
  name: string
  message: string
  validate?: Validator
}