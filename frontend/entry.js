import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import Root from "./components/root"
import Welcome from "./components/welcome"

function renderRoot(Root) {
  const root = document.getElementById("content")
  if (root) {
    ReactDOM.render(<Root />, root)
  }
}

function renderWelcome(Welcome) {
  const root = document.getElementById("welcome-content")
  if (root) {
    ReactDOM.render(<Welcome />, root)
  }
}

const rootPath = "./components/root";
const welcomePath = "./components/welcome";

document.addEventListener("DOMContentLoaded", () => {
  renderRoot(Root);
  renderWelcome(Welcome);
  
  if (module.hot) {
    module.hot.accept(rootPath, () => {
      renderRoot(Root)
    })
    module.hot.accept(welcomePath, () => {
      renderWelcome(Welcome)
    })
  }
})
