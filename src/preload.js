import title_bar from './scripts/title_bar'
import { ipcRenderer } from "electron";

window.ipcRenderer = ipcRenderer

window.addEventListener('DOMContentLoaded', () => {
  title_bar()

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

