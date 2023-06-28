function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const tag = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    tag.setAttribute("src", "./assets/avatar-light.png")
  } else {
    tag.setAttribute("src", "./assets/avatar.png")
  }
}
