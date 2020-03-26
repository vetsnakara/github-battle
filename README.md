<a href="https://codesandbox.io/s/github/vetsnakara/hacker-news-clone/tree/master/?fontsize=14&hidenavigation=1&theme=dark">
  <img height="20" alt="Edit github-battle" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

<a href="https://standardjs.com">
  <img height="20" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"/>
</a>

<h2>
  <a href="https://sleepy-almeida-a073df.netlify.com/" target="_blank">Hacker News client</a>
</h2>

> A React-powered implementation of "soft" Hacker News client using its Firebase API

### 📺 Preview
  <table style="width: 100%; background-color: white"">
  <tr>
    <th>Light</th>
    <th>Dark</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/posts-light.png"/></td>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/posts-dark.png"/></td>
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
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/post-light.png"/></td>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/post-dark.png"/></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/user-light.png"/></td>
    <td><img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/user-dark.png"/></td>
  </tr>
  </table>
</details>

### ✨ Features
* Use [Hacker News API](https://github.com/HackerNews/API)
* Pages:
  * `/` - top stories
  * `/new` - new stories
  * `/user?id=username` - user metadata and his stories
  * `/post?id=123456` - post metadata and related comments
* Loading indicators
* Theme button

### 🛠️ Technologies
* __React__ for UI rendering
* __React Hooks__ for side effects
* __React Context__ for toggling light/dark theme
* __Redux__ for state management
* __Redux Thunk__ for API calls
* __React Router__ for routing
* __React JSS__ for styles and theming

### 🚀 Setup
``` sh
$ git clone https://github.com/vetsnakara/hacker-news-clone.git
$ cd hacker-news-clone
$ npm install
$ npm start
```

### 👷 Author
**Konstantin Arakantsev**
- Github: [@vetsnakara](https://github.com/vetsnakara)
