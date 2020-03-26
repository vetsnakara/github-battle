<a href="https://codesandbox.io/s/github/vetsnakara/github-battle/tree/master/?fontsize=14&hidenavigation=1&theme=dark">
  <img height="20" alt="Edit github-battle" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

<a href="https://standardjs.com">
  <img height="20" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"/>
</a>

<h2>
  <a href="https://infallible-rosalind-4b617c.netlify.com" target="_blank">Github Battle</a>
</h2>

> This project is a "Github Battle" app. You'll be able to see the most popular repos for a variety of languages as well as battle two Github users to see who has the better profile.

### 📺 Preview
  <table style="width: 100%; background-color: white"">
  <tr>
    <th>Light</th>
    <th>Dark</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/github-battle/master/preview/popular-light.png"/></td>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/github-battle/master/preview/popular-dark.png"/></td>
  </tr>
  </table>

<details>
<summary>other views 👀</summary>
  <table style="width: 100%; background-color: white"">
  <tr>
    <th>Light</th>
    <th>Dark</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/github-battle/master/preview/battle-light.png"/></td>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/github-battle/master/preview/battle-dark.png"/></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/github-battle/master/preview/results-light.png"/></td>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/github-battle/master/preview/results-dark.png"/></td>
  </table>
</details>

### ✨ Features
* Use [Github API](https://developer.github.com/v3/)
* Pages:
  * `/` - popular repos
  * `/battle` - battle between two github users
  * `/battle/results` - battle results
* Loading indicators
* Theme button
* Custom Tooltips (based on render props pattern)

### 🛠️ Technologies
* __React__ for UI rendering
* __React Hooks__ for local state and side effects
  * class-based components are used too 🤫
* __React Context__ for toggling light/dark theme
* __React Router__ for routing
* __React JSS__ for styles and theming

### 🚀 Setup
``` sh
$ git clone https://github.com/vetsnakara/github-battle.git
$ cd github-battle
$ npm install
$ npm start
```

### 👷 Author
**Konstantin Arakantsev**
- Github: [@vetsnakara](https://github.com/vetsnakara)
