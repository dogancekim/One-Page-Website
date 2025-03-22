const box = document.getElementById("lightbox");
const boxImage = document.getElementById("lightbox-img");
const btnClose = document.getElementById("close-btn");

Array.from(document.getElementsByClassName("thumbnail")).forEach(el => {
    el.addEventListener("click", () => {
        boxImage.src = el.dataset.full;
        box.classList.add("show");
    });
});

btnClose.addEventListener("click", () => {
    box.classList.remove("show");
});