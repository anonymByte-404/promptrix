import * as readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process'
import type { Validator } from './types'

export async function textPrompt(config: {
  message: string
  validate?: Validator
}): Promise<string> {
  const rl = readline.createInterface({ input: stdin, output: stdout })

  try {
    while (true) {
      const answer = await rl.question(`${config.message} `)

      if (!config.validate) return answer

      const validation = config.validate(answer)
      if (validation === true) return answer
      console.log(validation === false ? "Invalid input" : validation)
    }
  } finally {
    rl.close()
  }
}