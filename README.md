<h1 align="center">
  <img src="https://placehold.co/400x100/black/white?text=Promptrix" alt="Promptrix Logo" width="400"/>
</h1>

<h3 align="center">The TypeScript-Powered CLI Prompt Engine</h3>

<blockquote>
  <strong>Early Development Notice:</strong> Promptrix is currently in active development.
</blockquote>

<div align="center">
  <img src="https://img.shields.io/badge/@promptrix/core-0.2.0-red" alt="npm version">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
</div>

<h2>🚀 Features</h2>
<ul>
  <li><strong>TypeSafe:</strong> Full TypeScript support.</li>
  <li><strong>Modular:</strong> Use only what you need.</li>
  <li><strong>Cross-Platform:</strong> Works on Windows, macOS, and Linux.</li>
</ul>

<h2>📦 Installation</h2>
<pre><code>npm install @promptrix/core
# or
pnpm add @promptrix/core
# or
yarn add @promptrix/core</code></pre>

<h2>💻 Basic Usage</h2>

```ts
import { textPrompt } from '@promptrix/core'

(async () => {
  const name: string = await textPrompt({
    message: "Enter your name:",
    validate: (input: string) => input.length > 2 || "Minimum 3 characters"
  })
  console.log(`Hello, ${name}!`)
})()
```

<h2>📂 Packages</h2>
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #1e1e1e; color: #ffffff;">
      <th style="padding: 12px; border: 1px solid #444444;">Package</th>
      <th style="padding: 12px; border: 1px solid #444444;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #444444;"><code>@promptrix/core</code></td>
      <td style="padding: 12px; border: 1px solid #444444;">Base prompt engine.</td>
    </tr>
  </tbody>
</table>

<h2>📝 License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>
