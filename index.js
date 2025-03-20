const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".navbar__list__hamburger");
hamburger.addEventListener("click", () => {
    const flag = hamburger.getAttribute("data-active");
    if (flag === "false") {
        hamburger.setAttribute("data-active", true)
        list.style.right = 0
    }
    else {
        hamburger.setAttribute("data-active",false)
        list.style.right = '-100%'
    }
})
list.addEventListener("click", (e) => {
    if (e.target.matches(".navbar__listlink")) {
        list.style.right = '-100%'
        hamburger.setAttribute("data-active",false)
    }
})