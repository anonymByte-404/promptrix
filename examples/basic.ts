import { textPrompt } from '@promptrix/core'

(async () => {
  const name = await textPrompt({
    message: "Enter your name:",
    validate: (input) => input.length > 2 || "Minimum 3 characters"
  });
  console.log(`Hello ${name}!`)
})()