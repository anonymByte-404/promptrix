<h1>Project Issues</h1>

<p>This document tracks issues related to the <code>@promptrix/core</code> project. Each issue is recorded with its date, status, and description.</p>

> [!Note] 
> For the best viewing experience of this `ISSUES.md` file, please use [Visual Studio Code](https://code.visualstudio.com/) or any other IDE that supports Markdown styling.

<style>
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th, td {
    padding: 12px;
    text-align: left;
    border: 1px solid #444444;
  }

  th {
    background-color: #1e1e1e;
    color: #ffffff;
    font-weight: bold;
  }

  tr {
    transition: background-color 0.3s;
  }

  tr:hover {
    background-color: #333333;
  }

  .not-fixed {
    background-color: #d32f2f;
    color: white;
  }

  .working-on {
    background-color: #ffa000;
    color: white;
  }

  .fixed {
    background-color: #388e3c;
    color: white;
  }

  .issue-box {
    border: 1px solid #444444;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #1e1e1e;
  }

  a {
    color: white;
    text-decoration: underline;
  }
</style>

<h2>Issue Tracker</h2>
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Issue Description</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr class="not-fixed">
      <td>2025-03-30</td>
      <td><a href="#issue1">Could not find a declaration file for module <code>@promptrix/core</code></a></td>
      <td>Not Fixed</td>
    </tr>
  </tbody>
</table>

<h2>Issue Details</h2>

<div class="issue-box" id="issue1">
  <h3>Issue: Could not find a declaration file for module <code>@promptrix/core</code></h3>
  <ul>
    <li><strong>Date of Issue:</strong> 2025-03-30</li>
    <li><strong>Reported by:</strong> <a href="https://github.com/anonymByte-404">anonymByte-404</a></li>
    <li><strong>Description:</strong> TypeScript cannot find the declaration file for the module <code>@promptrix/core</code>, resulting in an implicit <code>any</code> type error. This is reported when importing from the package.</li>
    <li><strong>Status:</strong> Not Fixed</li>
    <li><strong>Next Steps:</strong> Review the package exports and ensure type declaration files are being generated correctly during the build process. Confirm that the <code>index.d.ts</code> file exists in the <code>dist</code> directory.</li>
  </ul>
</div>
