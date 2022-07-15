const sidebarMenu = document.querySelector(".rightSideMenu .bar")
const container = document.querySelector(".container")

sidebarMenu.addEventListener("click", () => {
    container.classList.toggle("active")
})


