function toggleMode() {
  const html = document.documentElement

  //  uma forma de fazer ele colocar e removar a palavra light para assim então ativar o nosso css e mudar o modo de claro pra escuro e vice versa
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // forma limpa de fazer
  html.classList.toggle("light")

  //pegar a tag imagem

  const img = document.querySelector("#profile img")

  const imgCaption = document.querySelector("#profile figcaption")

  //se tiver light mode adicionar a img light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar_miqueias_light.png")
    imgCaption.textContent = "Miqueias na universal"
  } else {
    img.setAttribute("src", "./assets/avatar_miqueias.png")
  }

  const alt = document.querySelector("#profile alt")
}

//se tiver light mode adicionar a img light
//se tiver sem o light mode manter a img normal
//substituir a imagem//
