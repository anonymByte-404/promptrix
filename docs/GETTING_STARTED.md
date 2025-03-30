<h1>Getting Started with Promptrix</h1>

<p>Welcome to Promptrix! This document will guide you through the installation process and provide you with a basic example to get started.</p>

<h2>Prerequisites</h2>

<p>Before you begin, ensure you have the following installed on your machine:</p>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a> (v12 or higher)</li>
  <li><a href="https://www.npmjs.com/">npm</a> (comes with Node.js) or <a href="https://yarnpkg.com/">yarn</a> (optional)</li>
</ul>

<h2>Installation</h2>

<p>To install <code>@promptrix/core</code>, run the following command in your terminal:</p>

<pre><code>npm install @promptrix/core</code></pre>

<p>Alternatively, if you prefer using <code>pnpm</code> or <code>yarn</code>, you can use:</p>

<pre><code>pnpm add @promptrix/core</code></pre>

<pre><code>yarn add @promptrix/core</code></pre>

<h2>Basic Usage</h2>

<p>Here’s a simple example to get you started with using <code>@promptrix/core</code> in your project:</p>

```ts
import { textPrompt } from '@promptrix/core'

(async () => {
  const name = await textPrompt({
    message: "What's your name?",
    validate: input => input ? true : "Name required"
  })
  console.log(`Hello, ${name}!`)
})()
```

<h3>Explanation of the Example</h3>

<ol>
  <li><strong>Import the Library:</strong> The <code>textPrompt</code> function is imported from <code>@promptrix/core</code>.</li>
  <li><strong>Prompting for Input:</strong> The <code>textPrompt</code> function is called with a configuration object containing:
    <ul>
      <li>A <code>message</code> that prompts the user for input.</li>
      <li>A <code>validate</code> function that checks if the input is valid (in this case, it requires a non-empty input).</li>
    </ul>
  </li>
  <li><strong>Displaying the Result:</strong> The user’s input is logged to the console.</li>
</ol>
