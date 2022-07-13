const bgImgs = document.getElementById("bgImgs")

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop:true,
    initialSlide: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

swiper.on('activeIndexChange', function (e) {
    bgImgs.src = (e.imagesToLoad[e.activeIndex].src);
});

const sidebarMenu = document.querySelector(".rightSideMenu .bar")
const container = document.querySelector(".container")

sidebarMenu.addEventListener("click", () => {
    container.classList.toggle("active")
})

