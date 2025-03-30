import { textPrompt } from '@promptrix/core'

(async () => {
  const name: string = await textPrompt({
    message: "Enter your name:",
    validate: (input: string) => input.length > 2 || "Minimum 3 characters"
  })
  console.log(`Hello, ${name}!`)
})()
