const sidebarMenu = document.querySelector(".rightSideMenu .bar")
const container = document.querySelector(".container")
const mainNormalSize = document.querySelectorAll(".ekip")
const text = document.querySelector(".ekipText")
const ekipInfo = document.querySelectorAll(".ekipInfo")

sidebarMenu.addEventListener("click", () => {
    container.classList.toggle("active")
})


mainNormalSize.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("activeA")
        text.style.opacity = "0"
        ekipInfo.forEach(item => {
            item.classList.toggle("activeB")
        })
    })
})




