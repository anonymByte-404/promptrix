<h1 align="center">
  <img src="https://placehold.co/400x100/black/white?text=Promptrix" alt="Promptrix Logo" width="400"/>
</h1>

<h3 align="center">The TypeScript-Powered CLI Prompt Engine</h3>

> [!NOTE]
> Early Development Notice: Promptrix is currently in active development. 
> Core functionality is stable, but APIs may evolve until v1.0 release.


<div align="center">
  <a href="https://npmjs.com/package/@promptrix/core">
    <img src="https://img.shields.io/npm/v/@promptrix/core?color=blue&logo=npm" alt="npm version">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  </a>
</div>

<h2>🚀 Features</h2>
<ul>
  <li><strong>TypeSafe:</strong> Full TypeScript support</li>
  <li><strong>Modular:</strong> Use only what you need</li>
  <li><strong>Cross-Platform:</strong> Works on Windows/macOS/Linux</li>
</ul>

<h2>📦 Installation</h2>
<pre><code>npm install @promptrix/core
# or
pnpm add @promptrix/core
# or
yarn add @promptrix/core</code></pre>

<h2>💻 Basic Usage</h2>
<pre><code class="language-typescript">import { textPrompt } from '@promptrix/core';

const name = await textPrompt({
  message: "What's your name?",
  validate: input => input ? true : "Name required"
});</code></pre>

<h2>📂 Packages</h2>
<table>
  <tr>
    <th>Package</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>@promptrix/core</code></td>
    <td>Base prompt engine</td>
  </tr>
  <tr>
    <td><code>@promptrix/forms</code></td>
    <td>Multi-prompt flows (WIP)</td>
  </tr>
</table>

<h2>📝 License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>